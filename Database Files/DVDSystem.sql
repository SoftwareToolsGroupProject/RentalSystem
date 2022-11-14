

CREATE TABLE DVDs (
DVDID INT(6) UNSIGNED AUTO_INCREMENT,
	Title VARCHAR(30) NOT NULL  ,
	Genre VARCHAR(1),
	Duration TIME,
	Rating DECIMAL(4,2),
Cost DECIMAL(4,2), 
	Status CHAR(1) NOT NULL,
	CONSTRAINT pk_DVDID PRIMARY KEY (DVDID)
);

CREATE TABLE Members (
	MemberID INT(6) UNSIGNED AUTO_INCREMENT,
	Forename VARCHAR(20) NOT NULL  ,
	Lastname VARCHAR(30) NOT NULL  ,
	Password VARCHAR (256) NOT NULL,
	Eircode VARCHAR(7) NOT NULL  ,
	Phone VARCHAR(10) NOT NULL  ,
	Email VARCHAR(100)   ,
	DOB Date NOT NULL ,
	CardDetails VARCHAR(35),
	ExpireDate VARCHAR(5),
	CVV VARCHAR(3),
	CONSTRAINT PK_MemberID PRIMARY KEY (MemberID)
);



CREATE TABLE Rentals (
RentalID INT(10) UNSIGNED,
	MemberID INT(6) UNSIGNED,
DVDID INT(6) UNSIGNED,
RentalDate Date NOT NULL ,
RentalDueDate DATE NOT NULL,
	Status CHAR(1) NOT NULL,
	CONSTRAINT PK_RentalID PRIMARY KEY (RentalID),
	CONSTRAINT FK_MemberID FOREIGN KEY (MemberID) REFERENCES Members(MemberID),
	CONSTRAINT FK_DVDID FOREIGN KEY (DVDID) REFERENCES DVDs(DVDID)
 );




INSERT INTO Members 
(Forename, Lastname, Password, Eircode, Phone, Email, DOB)
VALUES
('Darragh', 'Elbel', 'Hello', 'V92XX11', '0811111111', 'darragh@elbel.ie', '2001-01-01');

INSERT INTO Members 
(Forename, Lastname, Password, Eircode, Phone, Email, DOB)
VALUES
('Deirdre', 'Lee', 'Hello', 'V92XX22', '0822222222', 'deirdre@lee.ie', '2002-02-02');


INSERT INTO Members 
(Forename, Lastname, Password, Eircode, Phone, Email, DOB)
VALUES
('Ivan', 'Segade Carou', 'Hello', 'V92XX33', '0833333333', 'ivan@segade.carou', '2003-03-03');


INSERT INTO DVDs
(Title, Genre, Duration, rating, Cost, Status)
VALUES
('Thesis', 'Thriller', '2:00:00', 4.7, 5.95, 'A');

INSERT INTO DVDs
(Title, Genre, Duration, rating, Cost, Status)
VALUES
('Back to the Future I', 'Fiction', '2:00:00', 4.8, 6.95, 'A');

INSERT INTO DVDs
(Title, Genre, Duration, rating, Cost, Status)
VALUES
('Sea inside', 'Drama', '1:50:00', 4.3, 4.95, 'A');

