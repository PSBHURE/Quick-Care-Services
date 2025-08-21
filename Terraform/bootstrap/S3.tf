resource "aws_s3_bucket" "remote_s3" {
  bucket = "git-docker-terraform-intigration-state-bucket"

  tags = {
    Name = "git-docker-terraform-intigration-state-bucket"
  }
    force_destroy = true
}