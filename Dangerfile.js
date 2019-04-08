const includes = require('lodash.includes')

const { danger, fail, message, warn } = require('danger')

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

// Warns if there are changes to package.json, and tags the team.
const packageChanged = includes(danger.git.modified_files, 'package.json')
if (packageChanged) {
  const title = ':lock: package.json'
  const idea =
    'Changes were made to package.json. ' +
    'This will require a manual import by a Facebook employee.'
  warn(`${title} - <i>${idea}</i>`)
}

// Warns if the PR is opened against stable, as commits need to be cherry picked and tagged by a release maintainer.
// Fails if the PR is opened against anything other than `master` or `-stable`.
const isMergeRefMaster = danger.github.pr.base.ref === 'master'
const isMergeRefStable = danger.github.pr.base.ref.indexOf('-stable') !== -1
if (!isMergeRefMaster && isMergeRefStable) {
  const title = ':grey_question: Base Branch'
  const idea =
    'The base branch for this PR is something other than `master`. Are you sure you want to merge these changes into a stable release? If you are interested in backporting updates to an older release, the suggested approach is to land those changes on `master` first and then cherry-pick the commits into the branch for that release. The [Releases Guide](https://github.com/facebook/react-native/blob/master/Releases.md) has more information.'
  warn(`${title} - <i>${idea}</i>`)
} else if (!isMergeRefMaster && !isMergeRefStable) {
  const title = ':exclamation: Base Branch'
  const idea =
    'The base branch for this PR is something other than `master`. [Are you sure you want to target something other than the `master` branch?](http://facebook.github.io/react-native/docs/contributing.html#pull-requests)'
  fail(`${title} - <i>${idea}</i>`)
}
