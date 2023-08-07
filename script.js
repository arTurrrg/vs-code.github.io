var typed = new Typed(".typed", {
    strings: ["Visual Studio Code", "Visual Code", "Visual Studio"],
    typeSpeed: 102,
    backSpeed: 102,
    loop: true
})

window.onload = async () => {
    displayLogos()
    let activeTheme = localStorage.getItem('theme');
    applyTheme(activeTheme ? activeTheme : 'dark')
    setTimeout(() => {
        document.getElementsByClassName('loading')[0].style.display = 'none'
        document.body.style.overflow = 'visible'
    }, 1950);
}

const themeSwitchers = document.querySelectorAll('.changeTheme')

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme);
    });
});


function applyTheme(theme) {
    isLightTheme = theme === 'light';
    document.getElementsByClassName('changeTheme')[theme === 'dark' ? 1 : 0].id = 'active'
    document.getElementsByClassName('changeTheme')[theme === 'dark' ? 0 : 1].id = ''
    const loading = document.getElementsByClassName('loading')
    const header = document.querySelector('header')
    const title = document.querySelectorAll('.title')
    const sections = document.querySelectorAll('section')
    const home = document.getElementById('home')
    const languages_pg = document.getElementById('languages_pg')
    const logos = document.querySelectorAll('.logos p')
    const navLinks = document.querySelectorAll('nav a')
    const themeEl = document.getElementsByClassName('theme')
    const textAreas = document.querySelectorAll('textarea')
    const inputs = document.querySelectorAll('input')
    const footer = document.querySelector('footer')
    const logoNav = document.getElementById('logo-nav')
    const burgerMenu = document.querySelector('.burger-menu')
    const burgerMenuLines = document.querySelectorAll('.burger-menu .line')
    const page = document.documentElement
    if (theme === 'light') {
        loading[0].style.background = '#fff'
        header.style.backgroundColor = 'rgb(233, 233, 233, 0.9)'
        title.forEach(item => item.style.color = 'rgb(51, 51, 51)')
        sections.forEach(item => item.style.background = '#fff')
        home.style.background = 'rgb(233, 233, 233, 0.9)'
        languages_pg.style.background = '#fffafa'
        logos.forEach(item => item.style.color = 'rgb(51, 51, 51)')
        navLinks.forEach(item => item.style.color = 'rgb(51, 51, 51)')
        themeEl[0].style.background = '#676767'
        textAreas.forEach(item => item.style.background = 'rgb(223, 223, 223)')
        inputs.forEach(item => item.style.background = 'rgb(223, 223, 223)')
        footer.style.background = 'rgb(235, 235, 235)'
        logoNav.style.color = 'rgb(51, 51, 51)'
        burgerMenu.style.background = 'rgb(223, 223, 223)'
        burgerMenuLines.forEach(item => item.style.background = 'rgb(61, 61, 51)')
        page.style.setProperty('--bg-color', 'rgb(235, 235, 235')
    }
    if (theme === 'dark') {
        loading[0].style.background = ''
        header.style.backgroundColor = ''
        title.forEach(item => item.style.color = '')
        sections.forEach(item => item.style.background = '')
        home.style.background = ''
        languages_pg.style.background = ''
        logos.forEach(item => item.style.color = '')
        navLinks.forEach(item => item.style.color = '')
        themeEl[0].style.background = ''
        textAreas.forEach(item => item.style.background = '')
        inputs.forEach(item => item.style.background = '')
        footer.style.background = ''
        logoNav.style.color = ''
        burgerMenu.style.background
        burgerMenuLines.forEach(item => item.style.background = '')
        page.style.setProperty('--bg-color', '')
    }
}

//display logos
function displayLogos() {
    class languages {
        constructor(name, description, img) {
            this.name = name
            this.description = description
            this.img = img
        }
    }

    const languagesArray = [
        new languages('JS', 'Lightweight, interpreted, object-oriented.', './img/js.png'),
        new languages('Python', 'General-purpose, high-level, readable.', './img/python.png'),
        new languages('Java', 'Object-oriented, portable, scalable.', './img/java.png'),
        new languages('MarkDown', 'Lightweight, readable, translatable.', './img/markdown.png'),
        new languages('Json', 'Lightweight, human-readable, machine-parseable.', './img/json.png'),
        new languages('C', 'Powerful, low-level, system.', './img/C.png'),
        new languages('C++', 'Object-oriented, high-performance.', './img/C++.png'),
        new languages('C#', 'Object-oriented, .NET, compiled.', './img/cc.png'),
        new languages('Typescript', 'Superset of JavaScript, typed.', './img/typescript.png'),
        new languages('Powershell', 'Scripting, Windows, automation.', './img/powershell.png'),
        new languages('Php', 'Scripting, web development.', './img/php.png'),
        new languages('Haskell', 'Functional, high-performance, reliable.', './img/haskell.png'),
        new languages('Node.js', 'JavaScript, outside browser, event-driven.', './img/node-js.png'),
        new languages('Swift', 'Fast, safe, expressive.', './img/swift.png'),
        new languages('Kotlin', 'Statically typed, cross-platform, general.', './img/kotlin.png'),
        new languages('R', 'Statistical, open-source, data analysis.', './img/r.png'),
        new languages('Arduino', 'Microcontroller, simple electronics.', './img/arduino.png'),
        new languages('Go (Golang)', 'Fast, reliable, compiled.', './img/golang.png'),
        new languages('Sass', 'CSS preprocessor, extending.', './img/sass.png'),
        new languages('Sql', 'Database, interacting.', './img/sql.png'),
        new languages('Clojure', 'Functional, high-performance, reliable.', './img/clojure.png'),
        new languages('CoffeScript', 'Dialect of JavaScript, simplifying.', './img/coffescript.png'),
        new languages('Crystal', 'Functional, high-performance, reliable.', './img/crystal.png'),
        new languages('Rust', 'System, safe, fast.', './img/rust.png'),
        new languages('Racket', 'Functional, programming education.', './img/racket.png'),
        new languages('Lua', 'Portable, games, plugins.', './img/lua.png'),
        new languages('Nasm', 'Assembler, machine code.', './img/nasm.png'),
        new languages('Scala', 'Functional, high-performance, reliable.', './img/scala.png'),
        new languages('PureScript', 'Functional, safe, fast.', './img/purescript.png'),
        new languages('Reason', 'Functional, web development.', './img/reason.png'),
        new languages('Dart', 'Client-optimized, compiled.', './img/dart.png'),
        new languages('Elixir', 'Functional, BEAM, concurrency.', './img/elixir.png'),
        new languages('Groovy', 'Dynamic, object-oriented, Java.', './img/groovy.png'),
        new languages('Julia', 'High-level, high-performance, dynamic.', './img/julia.png'),
        new languages('Matlab', ' Numerical computing, matrix manipulation, statistical analysis.', './img/matlab.png'),
        new languages('Objective-C', 'Object-oriented, compiled, macOS-based.', './img/object-c.png'),
        new languages('Perl', 'General-purpose, interpreted, text manipulation.', './img/perl.png'),
        new languages('Erlang', 'Functional programming language designed for concurrency and fault-tolerance.', './img/erlang.png'),
        new languages('Zig', 'New programming language designed for performance and simplicity.', './img/zig.png'),
        new languages('React', 'JavaScript library for building user interfaces.', './img/react.png')

    ]

    const languages_pg = document.getElementById('languages_pg')

    languagesArray.forEach(item => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const name = document.createElement('p')
        const description = document.createElement('p')
        img.src = item.img
        img.alt = item.name
        name.textContent = item.name
        description.textContent = item.description
        div.appendChild(img)
        div.appendChild(name)
        div.appendChild(description)
        div.className = 'logos'
        languages_pg.appendChild(div)
    })
}

const burgerMenu = document.querySelector('.burger-menu')
const navLinks = document.querySelector('.nav-links')
const themeToggle = document.querySelector('.theme-toggle')
const navContent = document.querySelector('nav a')
const burgerMenuLines = document.querySelectorAll('.burger-menu line')
const html = document.documentElement

burgerMenu.addEventListener('click', () => {
    html.classList.toggle('no-scroll')
    navContent.classList.toggle('active')
    navLinks.classList.toggle('active')
    themeToggle.classList.toggle('active')
    burgerMenu.classList.toggle('active')
    burgerMenuLines.forEach(line => line.classList.toggle('active'))
});

const menuLinks = document.querySelectorAll('.nav-links a')

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        html.classList.toggle('no-scroll')
        navLinks.classList.remove('active')
        themeToggle.classList.remove('active')
        burgerMenu.classList.remove('active')
        burgerMenu.firstChild.classList.remove('active')
        burgerMenu.lastChild.classList.remove('active')
    });
});


