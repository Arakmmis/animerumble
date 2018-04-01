module.exports = {
    apps: [{
      name: 'animerumble',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ec2-user',
        host: 'ec2-13-250-193-142.ap-southeast-1.compute.amazonaws.com',
        key: './coinstory.pem',
        ref: 'origin/master',
        repo: 'git@bitbucket.org:marcelc63/animerumble.git',
        path: '/home/ec2-user/animerumble',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }