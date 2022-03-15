const express = require('express')
const PORT = 3000

const app = express()

function main(){
  app.listen(PORT, () => console.log('Server running on port:',PORT))
}

main()