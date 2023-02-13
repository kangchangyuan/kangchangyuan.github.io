# Git 

### 信息配置

配置个人git的提交信息，邮箱和用户名
```bash
git config --global user.name 'penguin'
git config --global user.emial 'penguin@outlook.com'
```

使用https进行推送，客户端记住密码
```bash
git config --global credential.helper.store
```

查看信息配置
```bash
git config --list
```

### 初始化

```bash
# 在当前目录下新建一个代码仓库
git init
# 新建一个目录，初始化为代码仓库
git init [projectName]
# 下载一个项目和他完整的代码提交历史
git clone [url]
```

### 同步

同步远程分支代码,pull代表的是拉取分支代码并且合并,fetch代表的是只拉取代码要自己merge
```bash
# 查看远程仓库地址
git remote -v
# 同步指定的远程分支代码
git pull origin master
# 同步所有的远程分支到本地
git pull --all
```

### 拉取

```bash
# fetch 只拉取远程分支代码
git fetch
# pull 拉取并且合并到当前分支上
git pull
```

### 分支

```bash
# 列出所有的本地分支
git branch
# 列出所有的远程分支和本地分支
git branch -a
```

- 分支新建
```bash
git checkout -b [newBranchName]
```

- 分支删除
```bash
# 删除分支
git branch -d [branchName]
# 强制删除分支
git branch -D [branchName]
```

- 分支改名
```bash
git checkout [branch]
git branch -m [newName]
```

### 合并

```bash
git merge
```

### 推送

```bash
# 普通推送
git push
# 强制代码推送覆盖
git push -f
```

### 暂存

前提先把所有的代码git add 到暂存区
```bash
# 将当前的代码改动暂存起来
git stash
# 恢复最后一次暂存的改动
git stash pop
# 产看有多好暂存
git stash list
```

### 撤销

```bash
# 撤销当前修改
git reset --hard
```