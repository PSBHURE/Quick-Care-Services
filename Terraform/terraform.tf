terraform {
    required_version = "1.12.2"
  required_providers {
    aws = {
        source  = "hashicorp/aws"
    version = "6.5.0"
    }
  }
  backend "s3" {
  bucket = "git-docker-terraform-intigration-state-bucket"
  key = "terraform.tfstate"
  region = "ap-south-1"
  dynamodb_table = "git-docker-terraform-intigration-table"
 }
}

provider "aws" {
  region = "ap-south-1"
}
