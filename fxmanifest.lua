fx_version 'cerulean'
game 'gta5'

author 'Gabriel Rossin Ferrante'
description 'Metropole-Garage (A garage system with data persistence in the DB)'
version '1.0.0'

client_scripts {
    'build/client/*.js',
}

server_scripts {
    'build/server/*.js',
}

files {
    'build/ui/*',
    'build/ui/**/*'
}

ui_page 'build/ui/index.html'
