const fs = require("node:fs");
const readline = require("node:readline");
const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.github_token,
});

const OWNER = "<username-or-the-organisation-name>";
const REPO = "<repo-name>";

async function deleteBranch(ref, owner, repo) {
  try {
    await octokit.request("DELETE /repos/{owner}/{repo}/git/refs/heads/{ref}", {
      owner,
      repo,
      ref,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.log("successfully deleted branch: ", ref);
  } catch (error) {
    console.error(`error occured while deleting branch: ${ref}`, error);
  }
}

async function processLineByLine() {
  const fileStream = fs.createReadStream("stale-branches.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    await deleteBranch(line, OWNER, REPO);
  }
}

processLineByLine();
