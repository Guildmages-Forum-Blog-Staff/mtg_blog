#!/usr/bin/env bash
# Usage: `cd .git/hooks && ln -s ../../_scripts/pre-commit.sh pre-commit`.
#        or add `. ../../_scripts/precommit.sh` to your `.git/hooks/pre-commit`. 
set -e

# This snippet only care staged files.
# Required moreutils or sponge.
if [[ -n $(npm ls imagemin-cli --parseable) && -n $(command -v sponge) ]]; then
  STAGED_FILES=($(git diff --name-only --cached))
  MATCH_MIME_TYPE=("image/jpeg" "image/png" "image/svg+xml" "image/gif")

  for pic in ${STAGED_FILES[@]}; do
    if [[ ${MATCH_MIME_TYPE[@]} =~ "$(file --brief --mime-type ${pic})" ]]; then
      npm exec --package imagemin-cli -- imagemin ${pic} | sponge ${pic}
      git add ${pic}
    fi
  done
fi
