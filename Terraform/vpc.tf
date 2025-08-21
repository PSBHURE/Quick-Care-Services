resource "aws_vpc" "VPC" {
  cidr_block = var.VPC_CIDR
  instance_tenancy = "default"
  
  tags = {
    Name = "pri_vpc"
    region = var.AWS_REGON
    Description = "PRATIK-VPC"
  }
}