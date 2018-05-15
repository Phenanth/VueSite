!! Instructions used in creating the database.

create database test;

grant update,select,insert on test.* to webAdmin@localhost identified by 'byxiaowu9';

use test;

CREATE TABLE `users` (
  `username` char(24) PRIMARY KEY,
  `password` char(16) NOT NULL
) DEFAULT CHARSET=gbk;

--------------------------------------------
180515:

alter table users add column role char(8) NOT NULL;

alter table users add column u_icon char(16) NOT NULL; 

update users set role='admin' where username='miotokyo@163.com';

update users set u_icon='null.jpg' where username='miotokyo@163.com'
/*
This is acctually storing the file name and when it was queried,
the server will combine the image file path with the file name
and return it to the front side.
*/

CREATE TABLE `memos` (
	`memoname` char(32) PRIMARY KEY,
	`is_private` boolean NOT NULL,
	`m_icon` char(16) NOT NULL
) DEFAULT CHARSET=gbk;

CREATE TABLE `records` (
	`ID` char(16) PRIMARY KEY,
	`memoname` char(32) NOT NULL,
	`content` text NOT NULL,
	`dis_type` char(8) NOT NULL
) DEFAULT CHARSET=gbk;

/*Also, if you want the mysql to sort things thats  longer than the default sort length:*/
SET max_sort_length = 2000;

