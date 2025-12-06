READ ME - PROJECT PART 1

Media Review Website - Javascript, HTML, CSS
Course: INFR 3120 - Web and Scripting Programming at Ontario Tech University
Students: Shifa Faisal, Imama Meraj, Mario Solundu

Link to website: https://infr3120-fall2025-project.onrender.com
Link to github repo: https://github.com/Shifa-Faisal/INFR3120-Fall2025-PROJECT.git

Project Overview -
Media review website where users can write and browse reviews for multiple types of media such as books, movies, tv shows and more, After consuming a piece of media users can submit their own reviews, edit previous or others reviews, or explore reviews left by others. 

The website is built with Javascript, HTML, CSS, EJS and styled using bootstrap, with data managed with MongoDB. 

    Media (Home) page 
    About Us Page
    Contact Us page
    Login/logout page 

Colour Scheme:
 #401014
 #591D28
 #8C3E4C
 #BF6071
 #BFAAAA
 white

Structure -
    Node_modules - contains all installed dependencies
    Public - holds all files accessible in browser
        Content - images and other media
        Script - client side Javascript files
    Server/config - database configuration files
    Server/models - data used by website
    Server/routes - contains route handlers 
        Index - routes for general navigation
        Media - routes for media review pages (add, edit, list)
        Users - routes for user related functions
    Server/views - contains EJS templates\
        Media - templates for pages
        Partials - reusable components (header, folder, main navigation)

    App - sets up Express configuration
    Server - starts Node server
    Package - project metadata
    Package-lock. - auto generated file (locks versions of installed packages)

Credits -
    Professor Ahmed Munieb Sheikh - Code provided in class
    Expressjs.com - To create the base of website
    Font Awesome.com - To find mini logos for header and more
    Bootstrap.com - Styling 
    Angular - client side
    Shifa Faisal - Contact: shifa.faisal@ontariotechu.net
    Imama Meraj - Contact  imama.meraj@ontariotechu.net
    Mario Solundo Onyido - Contact: mariosolundo.onyido@ontariotechu.net 


