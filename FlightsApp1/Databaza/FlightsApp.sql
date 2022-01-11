create database FlightsApptest
use  FlightsApp

/*create table Users(
UserID int primary key not null,
EmriMbiemri varchar(225),
Ditelindja datetime,
Gjinia varchar (10),
NrPersonal int,
Shtetesia varchar (20),
KodiPostal int,
NrTelefonit varchar(30),
Email varchar (30),
Password varchar(225)
)
*/

--(100000000,1)
create table Kompania(
KompaniaID int identity(1,1) primary key,
KompaniaEmri varchar(55) NOT NULL,
NrTelefonit varchar(30), 
Email varchar (30),
Adresa varchar(30),
Qyteti varchar(30),
Shteti varchar(30),
KodiPostal int,
)
--(1,99)
create table Klienti(
KlientiID int identity(1,1) primary key,
EmriMbiemri varchar(225),
Ditelindja datetime,
Gjinia varchar (10),
Adresa varchar(30),
NrPersonal int UNIQUE,
Shtetesia varchar (20),
KodiPostal int,
NrTelefonit varchar(30),
Email varchar (30),
)

create table Roli (
RoliID int identity (1,1) primary key,
RoliEmri varchar(55),
)
--(100,1)
create table Stafi(
StafiID int identity(1,1) primary key,
EmriMbiemri varchar(225),
Ditelindja datetime,
Gjinia varchar (10),
NrPersonal int,
Shtetesia varchar (20),
KodiPostal int,
NrTelefonit varchar(30),

Roli varchar (25),
Kompania varchar(25),


FillimiIPunes date,
MbarimiIPunes date
)

create table KlientiBanka(
KlientiBankaID int identity(1,1) primary key,

Klienti varchar(25),

CardNumber int UNIQUE,
CardType varchar(55),
ExpiryDate date,
SecurityCode int,
)

create table Aeroplani(
AeroplaniID int identity(1,1) primary key,

Stafi varchar(25),
  Kompania varchar(25),
)

create table Qyteti(
ISO int primary key,
Emri varchar(55),
)

create table Aeroporti(
AeroportiID int identity(1,1) primary key,
EmriAeroprtit varchar (55),

Aeroplani varchar(25),
Qyteti varchar(25),
)


create table Fluturimet(
FluturimetID int identity(1,1) primary key,

Stafi varchar(25),
Kompania varchar(25),

VendiNisjes varchar(25),
VendiZbritjes varchar(25),

DataNisjesOra datetime,
Cmimiet money
)

create table Booking(
id int identity (1,1) primary key,
Data date,

Klienti varchar(25),
Kompanite varchar(25),
Banka varchar(255),
FluturimetID int 
)


create table Shteti(
ShtetiCode int primary key,
ShtetiEmri varchar(55),

Qyteti varchar(25)
)

create table Pagesat(
id int identity(1,1) primary key,

Booking varchar(25)
)

create table Kafshet(
id int identity(1,1) primary key,
Viti varchar(255),
Lloji varchar(255),
Dimensioni int,
Skadimi varchar(255),

Klienti varchar(25),
)

create table AplikoPerPune(
Emri varchar(20),
Mbiemri varchar(20),
NrPersonal int primary key,
Adresa varchar(50),
NrTelefonit int,
DataELindjes date,
Gjinia varchar(10),
Pozita varchar(15),

Kompania varchar(25)
)

create table KompaniaCar (
KompaniaCarID int identity(1,1) Primary Key,
KompaniaEmri varchar(55) NOT NULL,
NrTelefonit varchar(30), 
Email varchar (30),
Adresa varchar(30),
Qyteti varchar(30),
Shteti varchar(30),
KodiPostal int,
)

create table RentACar(
MakinaID int identity(1,1) primary key,
Targat int UNIQUE NOT NULL,
Lloji varchar(55) NOT NULL,
Ngjyra varchar(20),
Viti smalldatetime,

Klienti varchar(25),
KompaninaCar varchar(25),

PickUpLocation varchar(255),
PickUpDate datetime,
ReturnDate datetime,
)

create table Hotels(
HoteliID int identity(1,1) Primary Key,
Emri varchar(25),
Dhoma int UNIQUE,
DataEArdhjes datetime,
DataELargimit datetime,
NrPersonave int,
Oferta varchar(255),
Cmimi money,
Klienti varchar(25),
Kompanina varchar(25),
)

create table PushimiPerPunetore(
PPID int identity(1,1) Primary Key,
FillimiIPushimit datetime,
MbarimiIPushit datetime,
Arseyja varchar(255),
Stafi varchar(25),
Kompania varchar(25),
)

create table Delivery(
DeliveryID int identity(1,1) Primary Key,
Klienti varchar(25),
Aeroporti varchar(25),
Cmimi money,
KohaENisjes datetime,
KohaEArritjes datetime,
Kompania varchar(25),
)

