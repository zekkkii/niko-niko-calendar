create database calendario_niko_niko
use calendario_niko_niko

create table data(
id int identity primary key,
name varChar(30),
last_name VarChar(50),
date_info date,
satisfaction varChar(30),
comments varchar(200)
)

select * from data
drop table   data
