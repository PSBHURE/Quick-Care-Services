create database quickcare;

CREATE TABLE `quickcare`.`customer_details` (
  `cust_id` INT NOT NULL AUTO_INCREMENT,
  `cust_name` VARCHAR(45) NULL,
  `cust_pwd` VARCHAR(45) NULL,
  `cust_email` VARCHAR(45) NULL,
  `cust_phone` VARCHAR(45) NULL,
  `cust_gender` VARCHAR(45) NULL,
  `cust_location` VARCHAR(45) NULL,
  PRIMARY KEY (`cust_id`));

CREATE TABLE `quickcare`.`caretaker_details` (
  `caretaker_id` INT NOT NULL AUTO_INCREMENT,
  `caretaker_name` VARCHAR(45) NULL,
  `caretaker_pwd` VARCHAR(45) NULL,
  `caretaker_email` VARCHAR(45) NULL,
  `caretaker_gender` VARCHAR(45) NULL,
  `caretaker_age` INT NULL,
  `caretaker_phone` VARCHAR(45) NULL,
  `caretaker_profile` VARCHAR(45) NULL,
  `caretaker_location` VARCHAR(45) NULL,
  `caretaker_exp` VARCHAR(45) NULL,
  `charges` DOUBLE NULL,
  PRIMARY KEY (`caretaker_id`));

CREATE TABLE `quickcare`.`patient_details` (
  `patient_id` INT NOT NULL AUTO_INCREMENT,
  `cust_id` INT NULL,
  `patient_name` VARCHAR(45) NULL,
  `patient_gender` VARCHAR(45) NULL,
  `patient_age` INT NULL,
  `patient_location` VARCHAR(45) NULL,
  `service_hr` INT NULL,
  `from_date` DATE NULL,
  `to_date` DATE NULL,
  `caretype` VARCHAR(45) NULL,
  `caretaker_id` INT NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`patient_id`),
  INDEX `cust_id_idx` (`cust_id` ASC) VISIBLE,
  INDEX `caretaker_id_idx` (`caretaker_id` ASC) VISIBLE,
  CONSTRAINT `cust_id`
    FOREIGN KEY (`cust_id`)
    REFERENCES `quickcare`.`customer_details` (`cust_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `caretaker_id`
    FOREIGN KEY (`caretaker_id`)
    REFERENCES `quickcare`.`caretaker_details` (`caretaker_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `quickcare`.`feedback` (
  `feedback_id` INT NOT NULL AUTO_INCREMENT,
  `feedback_msg` VARCHAR(45) NULL,
  `patient_id` INT NULL,
  `caretaker_id` INT NULL,
  PRIMARY KEY (`feedback_id`),
  INDEX `patient_fkid_idx` (`patient_id` ASC) VISIBLE,
  INDEX `caretaker_fkid_idx` (`caretaker_id` ASC) VISIBLE,
  CONSTRAINT `patient_fkid`
    FOREIGN KEY (`patient_id`)
    REFERENCES `quickcare`.`patient_details` (`patient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `caretaker_fkid`
    FOREIGN KEY (`caretaker_id`)
    REFERENCES `quickcare`.`caretaker_details` (`caretaker_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);




CREATE TABLE `quickcare`.`booking_details` (
  `booking_id` INT NOT NULL AUTO_INCREMENT,
  `cust_id` INT NULL,
  `caretaker_id` INT NULL,
  `total_amount` DOUBLE NULL,
  `reason_ofrejection` VARCHAR(45) NULL,
  `patient_id` INT NULL,
  `payment_status` VARCHAR(45) NULL,
  PRIMARY KEY (`booking_id`),
  INDEX `cust_bd_id_idx` (`cust_id` ASC) VISIBLE,
  INDEX `caretaker_bd_id_idx` (`caretaker_id` ASC) VISIBLE,
  INDEX `patient_bd_id_idx` (`patient_id` ASC) VISIBLE,
  CONSTRAINT `cust_bd_id`
    FOREIGN KEY (`cust_id`)
    REFERENCES `quickcare`.`customer_details` (`cust_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `caretaker_bd_id`
    FOREIGN KEY (`caretaker_id`)
    REFERENCES `quickcare`.`caretaker_details` (`caretaker_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `patient_bd_id`
    FOREIGN KEY (`patient_id`)
    REFERENCES `quickcare`.`patient_details` (`patient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `quickcare`.`caretype` (
  `profession` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`profession`));



CREATE TABLE `quickcare`.`payment` (
  `payment_id` INT NOT NULL AUTO_INCREMENT,
  `caretaker_id` INT NULL,
  `patient_id` INT NULL,
  `debit_card` VARCHAR(45) NULL,
  `credit_card` VARCHAR(45) NULL,
  `upi` VARCHAR(45) NULL,
  `mode_of_payment` VARCHAR(45) NULL,
  PRIMARY KEY (`payment_id`),
  INDEX `caretaker_p_id_idx` (`caretaker_id` ASC) VISIBLE,
  INDEX `patient_p_id_idx` (`patient_id` ASC) VISIBLE,
  CONSTRAINT `caretaker_p_id`
    FOREIGN KEY (`caretaker_id`)
    REFERENCES `quickcare`.`caretaker_details` (`caretaker_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `patient_p_id`
    FOREIGN KEY (`patient_id`)
    REFERENCES `quickcare`.`patient_details` (`patient_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    use quickcare;
    select * from customer_details;
    select * from caretaker_details;
    select * from patient_details;
    select * from feedback;
    select * from booking_details;
    select * from caretype;
    select * from payment;
    select * from customer_details;
    select p.patient_name,c.caretaker_name,c.caretaker_location,p.caretype,p.status,b.reason_ofrejection from patient_details p,caretaker_details c,booking_details b where p.caretaker_id=c.caretaker_id and p.patient_id=b.patient_id;
	select patient_id, patient_name, patient_location,from_date, to_date, caretype from patient_details;
ALTER TABLE payment DROP COLUMN mode_of_payment;
 select patient_name,patient_location,patient_gender,patient_age,from_date,to_date,service_hr from patient_details where status='pending' and caretaker_id=2;
 
select patient_details.patient_name,patient_details.patient_location,patient_details.patient_gender,patient_details.patient_age,patient_details.from_date,patient_details.to_date,patient_details.service_hr from patient_details inner join caretaker_details on caretaker_details.caretaker_id=patient_details.caretaker_id where patient_details.status='pending';
select p.patient_name,c.caretaker_name,c.caretaker_location,p.caretype,p.status,b.reason_ofrejection from patient_details p join caretaker_details c on p.caretaker_id=c.caretaker_id join booking_details b on p.patient_id=b.patient_id where p.cust_id=1;

select p.patient_name,c.caretaker_name,c.caretaker_location,p.caretype,p.status,b.reason_ofrejection from patient_details p,caretaker_details c,booking_details b where p.caretaker_id=c.caretaker_id and p.patient_id=b.patient_id and p.cust_id=2;
select p.patient_name,p.patient_location,p.status from patient_details p inner join caretaker_details c on p.caretaker_id=c.caretaker_id where p.status='accepted'and c.caretaker_id=2;
select * from patient_details where cust_id=1;
select patient_name,patient_location,patient_gender,patient_age,from_date,to_date,service_hr from patient_details where status='pending' and caretaker_id=2;
UPDATE patient_details SET status = 'pending' WHERE patient_name = 'sak';

UPDATE patient_details SET status = 'pending', caretaker_id = 2 WHERE patient_name ='';
UPDATE patient_details SET status = 'pending' WHERE patient_name = 'Abhishek';

update patient_details set status = "null" where patient_name = "Siya" ;

Insert into patient_details (status) values ("pending");
select p.patient_name,c.caretaker_name,c.caretaker_location,p.caretype,p.status,b.reason_ofrejection 
from patient_details p join caretaker_details c 
on p.caretaker_id=c.caretaker_id join booking_details b on p.patient_id=b.patient_id 
where p.cust_id=2;
insert into patient_details (caretaker_id,status) values (2,"pending");
alter table booking_details add status varchar(45);
insert into booking_details values (7,2,2,null,null,3,null,"pending");
select patient_id from patient_details where patient_name="Abhishek";

update patient_details  SET status = 'pending' WHERE patient_name = 'Abhishek';

insert into booking_details (cust_id,caretaker_id,patient_id,status) 
select cust_id,caretaker_id,patient_id,status from patient_details where patient_name="Siya";
 
 select * from patient_details;
 select * from caretaker_details;
 select * from booking_details;
 /
select p.patient_name,c.caretaker_name,c.caretaker_location,p.caretype,p.status,
b.reason_ofrejection from patient_details p join caretaker_details c on 
p.caretaker_id=c.caretaker_id join booking_details b on p.patient_id=b.patient_id 
where b.cust_id=1;
\

select p.patient_id,c.caretaker_id from patient_details p join caretaker_details c
on  p.caretaker_id=c.caretaker_id where p.cust_id=1;


delete from p.patient_name,c.caretaker_name,c.caretaker_location,p.caretype,p.status,
b.reason_ofrejection Using patient_details p join caretaker_details c on 
p.caretaker_id=c.caretaker_id join booking_details b on p.patient_id=b.patient_id 
where p.patient_name="sak" and c.caretaker_name="Aditi" and b.cust_id=1;
select patient_name from patient_details where cust_id=2;

alter table customer_details add usertype varchar(45);
alter table caretaker_details add usertype varchar(45);
select * from caretype;
commit;


