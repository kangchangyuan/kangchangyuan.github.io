# Ubuntu 20.04

### 更换阿里云源
```bash
# 备份一份历史数据 
sudo cp /etc/sources.list  /etc/sources.list.backup
# 更换源 https://mirrors.aliyun.com/ubuntu/
sudo vim /etc/sources.list
# :wq 保存执行更新
sudo apt update
# 执行升级命令
sudo apt upgrade
```

### 常用命令

删除 -r 表示递归删除文件夹
```bash
# 删除文件
rm -f filename
# 删除文件夹
rm -rf filename
# 新建文件夹
mkdir filename
```

### WSL2配置
wsl2 和 Windows 主机的网络互通而且 IP 地址设置

```bash
# 在C:\Users\username\.wslconfig
[wsl2]
memory=2GB 
processors=4
swap=4GB
```