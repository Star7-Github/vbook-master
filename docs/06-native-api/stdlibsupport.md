# 标准库支持

# 标准库支持

更新时间：2024/01/10 16:04:30

## 标准库支持情况

名称 | 支持情况  
---|---  
标准 C 库 | C11 标准 C 库、POSIX.1 标准（部分支持）  
标准 C++库 | C++11、C++14、C++17（部分支持）、C++20（部分支持）  
  
## 标准 POSIX 接口支持情况

BlueOS 手表平台当前支持核心能力的标准 POSIX 接口，包含不依赖于内核的库函数实现，保证 Native 开发所需基础能力。

#### 主要模块

  * 线程
  * 信号量
  * 标准输入输出
  * 消息队列
  * 网络
  * 异步 I/O
  * 轮询
  * LOG 系统
  * 串口 I/O
  * 系统资源访问
  * 数学计算
  * 正则计算
  * 参数解析
  * 断言

#### 主要接口列表

模块 | 接口名称  
---|---  
时间管理 | clock_getres  
clock_gettime  
clock_settime  
clock  
difftime  
mktime  
time  
asctime  
ctime  
gmtime  
localtime  
strftime  
strftime_l  
ctime_r  
gmtime_r  
localtime_r  
strptime  
strptime_l  
tzset  
_tzset_r  
__getdate_err  
getdate  
getdate_r  
clock_settime  
clock_gettime  
clock_getres  
timer_create  
timer_delete  
timer_settime  
timer_gettime  
timer_getoverrun  
nanosleep  
clock_nanosleep   
clock_getcpuclockid  
clock_setenable_attr  
clock_getenable_attr  
文件系统 | mkdir  
opendir  
dirent  
telldir  
seekdir  
rewinddir  
closedir  
open  
close  
read  
write  
lseek  
rename  
unlink  
stat  
fstat  
fsync  
fcntl  
ioctl  
ftruncate  
rmdir  
chdir  
getcwd  
statfs  
access  
pipe  
mkfifo  
copy  
标准输入输出 | getdelim  
getline  
消息队列 | mq_close  
mq_getattr  
mq_notify  
mq_open  
mq_receive  
mq_send  
mq_unlink  
线程管理 | pthread_attr_destroy  
pthread_attr_init  
pthread_attr_setdetachstate  
pthread_attr_getdetachstate  
pthread_attr_setschedpolicy  
pthread_attr_getschedpolicy  
pthread_attr_setschedparam  
pthread_attr_getschedparam  
pthread_attr_setstacksize  
pthread_attr_getstacksize  
pthread_attr_setstackaddr  
pthread_attr_getstackaddr  
pthread_attr_setguardsize  
pthread_attr_getguardsize  
pthread_attr_setscope  
pthread_attr_getscope  
pthread_system_init  
pthread_detach  
pthread_join  
pthread_self  
pthread_exit  
pthread_once  
pthread_cleanup_pop  
pthread_cleanup_push  
pthread_cancel  
pthread_testcancel  
pthread_setcancelstate  
pthread_setcanceltype  
pthread_atfork  
pthread_kill  
pthread_mutex_init  
pthread_mutex_destroy  
pthread_mutex_lock  
pthread_mutex_unlock  
pthread_mutex_trylock  
pthread_mutexattr_init  
pthread_mutexattr_destroy  
pthread_mutexattr_gettype  
pthread_mutexattr_settype  
pthread_mutexattr_setpshared  
pthread_mutexattr_getpshared  
pthread_condattr_destroy  
pthread_condattr_init  
pthread_cond_init  
pthread_cond_destroy  
pthread_cond_broadcast  
pthread_cond_signal  
pthread_cond_wait  
pthread_rwlockattr_init  
pthread_rwlockattr_destroy  
pthread_rwlockattr_getpshared  
pthread_rwlockattr_setpshared  
pthread_rwlock_init  
pthread_rwlock_destroy  
pthread_rwlock_rdlock  
pthread_rwlock_tryrdlock  
pthread_rwlock_timedrdlock  
pthread_rwlock_timedwrlock  
pthread_rwlock_unlock  
pthread_rwlock_wrlock  
pthread_rwlock_trywrlock  
pthread_spin_init  
pthread_spin_destroy  
pthread_spin_lock  
pthread_spin_trylock  
pthread_spin_unlock  
pthread_barrierattr_destroy  
pthread_barrierattr_init  
pthread_barrierattr_getpshared  
pthread_barrierattr_setpshared  
pthread_barrier_destroy  
pthread_barrier_wait  
pthread_setspecific  
pthread_getspecific  
pthread_key_create  
pthread_key_delete  
信号量 | sem_close  
sem_destroy  
sem_getvalue  
sem_init  
sem_open  
sem_post  
sem_timedwait  
sem_trywait  
sem_unlink  
sem_wait  
网络通信 | accept  
bind  
shutdown  
getpeername  
getsockname  
getsockopt  
setsockopt  
connect  
listen  
recvfrom  
sendto  
socket  
closesocket  
ioctlsocket  
串口I/O | cfgetospeed  
cfgetispeed  
cfsetospeed  
cfsetispeed  
tcgetattr  
tcsetattr  
tcsendbreak  
tcdrain  
tcflush  
tcflow  
tcgetsid  
cfmakeraw  
cfsetspeed  
  
上一篇

[密码算法](</native/cipher/cipher/>)