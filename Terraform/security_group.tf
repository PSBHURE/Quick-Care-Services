resource "aws_security_group" "CustomCG" {
  depends_on = [ aws_vpc.VPC ]
  name = "CustomCG"
  description = "Allow Ngnix,MySQL,SSH,HTTP port"
  vpc_id = aws_vpc.VPC.id
  tags = {
    Name = "CustomCG"
    Description = "CustomCG"
  }
}

resource "aws_vpc_security_group_ingress_rule" "Allow_SSH" {
  security_group_id = aws_security_group.CustomCG.id
  cidr_ipv4 = var.public_route_table
  from_port = 22
  to_port = 22
  ip_protocol = "tcp"
  tags = {
    name = "Allow_SSH"
    description = "Allow_SSH"
  }
}

resource "aws_vpc_security_group_ingress_rule" "Allow_HTTP" {
  security_group_id = aws_security_group.CustomCG.id
  cidr_ipv4 = var.public_route_table
  from_port = 80
  to_port = 80
  ip_protocol = "tcp"
  tags = {
    name = "Allow_HTTP"
    description = "Allow_HTTP"
  }
}

resource "aws_vpc_security_group_ingress_rule" "Allow_MySQL" {
  security_group_id = aws_security_group.CustomCG.id
  cidr_ipv4 = var.VPC_CIDR
  from_port = 3306
  to_port = 3306
  ip_protocol = "tcp"
    tags = {
    name = "Allow_MySQL"
    description = "Allow_MySQL"
  }
}

resource "aws_vpc_security_group_ingress_rule" "Allow_Nginex" {
  security_group_id = aws_security_group.CustomCG.id
  cidr_ipv4 = var.VPC_CIDR
  from_port = 8000
  to_port = 8000
  ip_protocol = "tcp"
    tags = {
    name = "Allow_Nginex"
    description = "Allow_Nginex"
  }
}

resource "aws_vpc_security_group_egress_rule" "Allow_All_Outbound" {
  security_group_id = aws_security_group.CustomCG.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"

  tags = {
    Name        = "Allow_All_Outbound"
    Description = "Allow all outbound traffic"
  }
}
