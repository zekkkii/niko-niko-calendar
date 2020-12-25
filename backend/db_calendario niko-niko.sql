create database calendario_niko_niko
use calendario_niko_niko

create table data(
id int identity primary key,
name varChar(30),
last_name VarChar(50),
date_info date,
satisfaction tinyint,
comments varchar(200)
)

select * from data


