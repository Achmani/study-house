<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Step to build this project

### Pull and install depedencies
- pull latest from main branch
- for the .env can copy from env.example
- composer install

### Build using Laravel Sail
- ./vendor/bin/sail build
- ./vendor/bin/sail up
- ./vendor/bin/sail root-shell

### Fix Owner and Group
- sail root-shell
- cd ..
- chown -R sail:sail html

### Fix clear config and cache
- ./vendor/bin/sail artisan config:clear
- ./vendor/bin/sail artisan cache:clear

### Migrate Database
- ./vendor/bin/sail artisan migrate

### API Documentation
- This Project use insomnia as a API Documentation. Can Import latest insomnisa json in root path

### For Accessing the UI can go to http://localhost:3000
