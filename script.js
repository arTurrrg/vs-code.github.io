var typed = new Typed(".typed", {
    strings: ["Visual Studio Code", "Visual Code", "Visual Studio"],
    typeSpeed: 102,
    backSpeed: 102,
    loop: true
})

window.onload = async () => {
    let activeTheme = localStorage.getItem('theme');
    applyTheme(activeTheme ? activeTheme : 'dark')
    setTimeout(() => {
        document.getElementsByClassName('loading')[0].style.display = 'none'
        document.body.style.overflow = 'visible'
    }, 2000);

    displayLogos()
}

if ("ontouchstart" in document.documentElement) {
}

const themeSwitchers = document.querySelectorAll('.changeTheme')

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme);
    });
});

function applyTheme(theme) {
    document.getElementsByClassName('changeTheme')[theme === 'dark' ? 1 : 0].id = 'active'
    document.getElementsByClassName('changeTheme')[theme === 'dark' ? 0 : 1].id = ''
    if (theme === 'light') {
        document.getElementsByClassName('loading')[0].style.background = '#fff'
        document.querySelector('header').style.backgroundColor = 'rgb(233, 233, 233, 0.9)'
        document.querySelectorAll('.title').forEach(item => item.style.color = 'rgb(51, 51, 51)')
        document.querySelectorAll('section').forEach(item => item.style.background = '#fff')
        document.getElementById('home').style.background = 'rgb(233, 233, 233, 0.9)'
        document.getElementById('languages_pg').style.background = '#fffafa'
        document.querySelectorAll('.logos p').forEach(item => item.style.color = 'rgb(51, 51, 51)')
        document.querySelectorAll('nav a').forEach(item => item.style.background = 'rgb(223, 223, 223)')
        document.querySelectorAll('nav a').forEach(item => item.style.color = 'rgb(51, 51, 51)')
        document.getElementById('theme').style.background = 'rgb(233, 233, 233)'
        document.querySelectorAll('textarea').forEach(item => item.style.background = 'rgb(223, 223, 223)')
        document.querySelectorAll('input').forEach(item => item.style.background = 'rgb(223, 223, 223)')
        document.querySelectorAll('footer').forEach(item => item.style.background = '#fffafa')
    }
    if (theme === 'dark') {
        document.getElementsByClassName('loading')[0].style.background = ''
        document.querySelector('header').style.backgroundColor = ''
        document.querySelectorAll('.title').forEach(item => item.style.color = '')
        document.querySelectorAll('section').forEach(item => item.style.background = '')
        document.getElementById('home').style.background = ''
        document.getElementById('languages_pg').style.background = ''
        document.querySelectorAll('.logos p').forEach(item => item.style.color = '')
        document.querySelectorAll('nav a').forEach(item => item.style.background = '')
        document.querySelectorAll('nav a').forEach(item => item.style.color = '')
        document.getElementById('theme').style.background = ''
        document.querySelectorAll('textarea').forEach(item => item.style.background = '')
        document.querySelectorAll('input').forEach(item => item.style.background = '')
        document.querySelectorAll('footer').forEach(item => item.style.background = '')
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

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
});