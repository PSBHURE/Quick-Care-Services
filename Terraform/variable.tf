variable "VPC_CIDR" {
  type = string
  default = "10.10.0.0/16"
}

variable "AWS_REGON" {
    type = string
    default = "ap-south-1"
}

variable "pub_subnet_cidr" {
  type = string
  default = "10.10.2.0/24"
}

variable public_route_table {  #we are doing this because we want to connect two way internet using public route table
    type = string
    default = "0.0.0.0/0"
}



