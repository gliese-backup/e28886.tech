private
public

evennode platform ko add kiya
ssh keys generate karke platform pe connect kardiya
git push karke

# Steps

ssh-keygen -t rsa -C "your_email@example.com"
cd /home/codespace/.ssh
cat id_rsa.pub

git remote add evennode git@git.evennode.com:id
git push evennode main

remove --env-file flag and change it to use dotenv package for deployment
on our hosting we don't need to add the PORT env variable just the JWTSECRET one
