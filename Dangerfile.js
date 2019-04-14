const fs = require('fs')
const path = require('path')
const { danger, fail, warn, markdown, message } = require('danger')
const _ = require('lodash')
const includes = require('lodash.includes')

// simple regex matcher to detect usage of helper function and its type signature
const hotMatch = /\bhot\(/gi
const hotSignatureMatch = /\bimport \{.*?hot.*?\} from '.*?\/helpers\/marble-testing'/gi

const coldMatch = /\bcold\(/gi
const coldSignatureMatch = /\bimport \{.*?cold.*?\} from '.*?\/helpers\/marble-testing'/gi

let errorCount = 0

// Warn when PR size is large
const bigPRThreshold = 600
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR (' + ++errorCount + ')')
  markdown(
    '> (' +
    errorCount +
    ') : Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.'
  )
}

// Check test exclusion (.only) is included
const modifiedSpecFiles = danger.git.modified_files.filter(function (filePath) {
  return filePath.match(/-spec.(js|jsx|ts|tsx)$/gi)
})

const testFilesIncludeExclusion = modifiedSpecFiles.reduce(function (
  acc,
  value
) {
  const content = fs.readFileSync(value).toString()
  const invalid =
    _.includes(content, 'it.only') || _.includes(content, 'describe.only')
  if (invalid) {
    acc.push(path.basename(value))
  }
  return acc
},
[])

if (testFilesIncludeExclusion.length > 0) {
  danger.fail('an `only` was left in tests (' + testFilesIncludeExclusion + ')')
}

// Check test cases missing type signature import for test marble helper functions
const testFilesMissingTypes = modifiedSpecFiles.reduce(function (acc, value) {
  const content = fs.readFileSync(value).toString()

  const hotFnMatchesWithoutTypes =
    content.match(hotMatch) && !content.match(hotSignatureMatch)
  const coldFnMatchesWithoutTypes =
    content.match(coldMatch) && !content.match(coldSignatureMatch)

  if (hotFnMatchesWithoutTypes || coldFnMatchesWithoutTypes) {
    acc.push(path.basename(value))
  }

  return acc
}, [])

if (testFilesMissingTypes.length > 0) {
  fail(
    'missing type definition import in tests (' +
    testFilesMissingTypes +
    ') (' +
    ++errorCount +
    ')'
  )
  markdown(
    '> (' +
    errorCount +
    ') : It seems updated test cases uses test scheduler interface `hot`, `cold` but miss to import type signature for those.'
  )
}

// Warns if there are changes to package.json, and tags the team.
const packageChanged = includes(danger.git.modified_files, 'package.json')
if (packageChanged) {
  const title = ':lock: package.json'
  const idea =
    'Changes were made to package.json. ' +
    'This will require a manual import by a NPC member.'
  warn(`${title} - <i>${idea}</i>`)
}

// Provides advice if a summary section is missing, or body is too short
const includesSummary =
  danger.github.pr.body &&
  danger.github.pr.body.toLowerCase().includes('## summary')
if (!danger.github.pr.body || danger.github.pr.body.length < 50) {
  fail(':grey_question: This pull request needs a description.')
} else if (!includesSummary) {
  const title = ':clipboard: Missing Summary'
  const idea =
    'Can you add a Summary? ' +
    'To do so, add a "## Summary" section to your PR description. ' +
    'This is a good place to explain the motivation for making this change.'
  message(`${title} - <i>${idea}</i>`)
}

// Warns if the PR is opened against stable, as commits need to be cherry picked and tagged by a release maintainer.
// Fails if the PR is opened against anything other than `master` or `-stable`.
const isMergeRefMaster = danger.github.pr.base.ref === 'master'
const isMergeRefStable = danger.github.pr.base.ref.indexOf('-stable') !== -1
if (!isMergeRefMaster && isMergeRefStable) {
  const title = ':grey_question: Base Branch'
  const idea =
    'The base branch for this PR is something other than `master`. Are you sure you want to merge these changes into a stable release? If you are interested in backporting updates to an older release, the suggested approach is to land those changes on `master` first and then cherry-pick the commits into the branch for that release.'
  warn(`${title} - <i>${idea}</i>`)
} else if (!isMergeRefMaster && !isMergeRefStable) {
  const title = ':exclamation: Base Branch'
  const idea =
    'The base branch for this PR is something other than `master`. [Are you sure you want to target something other than the `master` branch?](http://facebook.github.io/react-native/docs/contributing.html#pull-requests)'
  fail(`${title} - <i>${idea}</i>`)
}
