module.exports = {
  apps: [{
    name: 'hapijs-aws',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-14-246-171.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/ultrasound-key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:alitabet/hapijs-aws.git',
      path: '/home/ubuntu/hapijs-aws',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}