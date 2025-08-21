resource "aws_subnet" "pub_subnet" {
  depends_on = [ aws_vpc.VPC ]
  vpc_id = aws_vpc.VPC.id
  cidr_block = var.pub_subnet_cidr
  availability_zone = "ap-south-1b"
  tags = {
    "Name" = "pub_subnet"
    Description = "pub_subnet"
  }
}

