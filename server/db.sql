drop database if exists todo;
create database todo;
use todo;
create table task{
	id int primary key auto_increment,
	description varchar(255) not null,
};
INSERT INTO task (description) VALUES ('My test task');
INSERT INTO task (description) VALUES ('My another task');
