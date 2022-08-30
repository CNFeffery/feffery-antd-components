### 清除仓库主要文件的历史提交冗余空间

- 查看历史大文件

```bash
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')"
```

- 清除指定大文件

```bash
git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch feffery_antd_components/feffery_antd_components.min.js' --prune-empty --tag-name-filter cat -- --all

git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch feffery_antd_components/metadata.json' --prune-empty --tag-name-filter cat -- --all

git push origin main --force

rm -rf .git/refs/original/

git reflog expire --expire=now --all

git gc --prune=now
```
