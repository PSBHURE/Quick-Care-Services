resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.VPC.id

  route {
    cidr_block = var.public_route_table
    gateway_id = aws_internet_gateway.INTERNATE_GATEWAY.id  #route table must be connected to the internet gateway 
  }

  tags = {
    Name = "public_route_table"
    Description = "public_route_table"
  }
}


resource "aws_route_table_association" "public_subnet_associate_with_public_route_table" {     #This will connect pub subnet with pub route table
  subnet_id = aws_subnet.pub_subnet.id
  route_table_id = aws_route_table.public_route_table.id
}
