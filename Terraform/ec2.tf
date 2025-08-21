resource "aws_key_pair" "terra_aws_key" {
  key_name = "terra_aws_key"
  public_key = file("terra_aws_key.pub")
}

resource "aws_instance" "Public_Server" {
    depends_on = [ aws_security_group.CustomCG ]
  ami = "ami-021a584b49225376d"
  instance_type = "t2.micro"
  key_name = aws_key_pair.terra_aws_key.key_name
  subnet_id = aws_subnet.pub_subnet.id
  vpc_security_group_ids = [aws_security_group.CustomCG.id]
  associate_public_ip_address = true
  user_data = file("${path.module}/terraform_and_aws_cli_install.sh")

  tags = {
    Name = "Public_Server"
    Description = "Public_Server"
  }
  root_block_device {
    volume_size = 20
    volume_type = "gp3"
  }
}