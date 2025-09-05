create database quickcare;

CREATE TABLE `quickcare`.`customer_details` (
  `cust_id` INT NOT NULL AUTO_INCREMENT,
  `cust_name` VARCHAR(45) NULL,
  `cust_pwd` VARCHAR(45) NULL,
  `cust_email` VARCHAR(45) NULL,
  `cust_phone` VARCHAR(45) NULL,
  `cust_gender` VARCHAR(45) NULL,
  `cust_location` VARCHAR(45) NULL,
  `usertype ` varchar(45),	
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
  `usertype ` varchar(45),		
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
  `status` varchar(45),
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

Insert into patient_details (status) values ("pending");
insert into patient_details (caretaker_id,status) values (2,"pending");


commit;


