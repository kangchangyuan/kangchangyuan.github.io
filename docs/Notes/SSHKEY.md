# SSH key

### 简介
SSH 全称 Secure Shell 安全外壳协议，是一种加密的网络传输协议。
它能够在公开的网络环境中提供安全的数据传输环境，通常用于登录远程主机和推拉代码。

### 生成key

```bash
# 创建新的 SSH 私钥与公钥密钥对，输入你的邮箱作为标签
ssh-keygen -m PEM -t ed25519 -C "your.email@example.com" 
# 推荐使用默认地址
Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter] 
#  此处直接回车即可；若设置密码，则每次使用 SSH 方式推送代码时都会要求输入密码
Enter passphrase (empty for no passphrase): 
```

### 查看key

```bash
# 通常.pub 公钥文件都存放在  ~/.ssh/
cd ~/.ssh/
# cat 查看
cat xxx.pub
```

### 认证命令

验证ssh公钥部署到远端机器上是否认证成功
```bash
# 命令执行后会返回对应服务器的成功或失败的认证信息
ssh -T git@xxx.com
```