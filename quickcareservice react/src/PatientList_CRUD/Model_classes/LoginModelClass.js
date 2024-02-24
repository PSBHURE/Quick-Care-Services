export default class LoginModelClass {
  caretaker_id = 103;
  caretaker_name = "";
  caretaker_password = "";
  confirm_password = "";
  caretaker_email = "";
  caretaker_age = "";
  caretaker_phone = "";
  caretaker_location = "";
  caretaker_profile = "";

  caretaker_exp = "";
  charges = "";
  caretaker_gender = "";
  patient_id = 1;

  constructor(
    caretaker_id,
    caretaker_name,
    caretaker_password,
    confirm_password,
    caretaker_email,
    caretaker_age,
    caretaker_phone,
    caretaker_location,
    caretaker_profile,
    babysitter,
    caretaker_exp,
    charges,
    caretaker_gender,
    patient_id
  ) {
    this.caretaker_id = caretaker_id;
    this.caretaker_name = caretaker_name;
    this.caretaker_password = caretaker_password;
    this.confirm_password = confirm_password;
    this.caretaker_email = caretaker_email;
    this.caretaker_age = caretaker_age;
    this.caretaker_phone = caretaker_phone;
    this.caretaker_location = caretaker_location;
    this.caretaker_profile = caretaker_profile;
    this.babysitter = babysitter;
    this.caretaker_exp = caretaker_exp;
    this.charges = charges;
    this.caretaker_gender = caretaker_gender;
    this.patient_id = patient_id;
  }
}
