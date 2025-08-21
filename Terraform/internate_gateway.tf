resource "aws_internet_gateway" "INTERNATE_GATEWAY" {
  depends_on = [ aws_vpc.VPC ]
  vpc_id = aws_vpc.VPC.id      # internate gateway should be connected with our VPC othervise any resource which is created under VPC can not communicate with internate 

  tags = {
    "Name" = "INTERNATE_GATEWAY"
    Description = "INTERNATE_GATEWAY"
  }
}