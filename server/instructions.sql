!! Instructions used in creating the database.

create database test;

grant update,select,insert on test.* to webAdmin@localhost identified by 'byxiaowu9';

use test;

CREATE TABLE `users` (
  `username` char(24) PRIMARY KEY,
  `password` char(16) NOT NULL
) DEFAULT CHARSET=gbk;

