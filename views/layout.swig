<!DOCTYPE html>
<html>
<head>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <meta charset=utf-8 />
    <title>{{config.name}} Style Guide</title>
    <link rel='shortcut icon' href='path/to/favicon.ico' type='image/x-icon' />
    <link rel='stylesheet' href='styles/main.css' type='image/x-icon' />
    <link rel='stylesheet' href='styles/style.css' />
    <link rel='stylesheet' href='styles/simplegrid.css' />
    <link rel='stylesheet' href='styles/ionicons.min.css' />
</head>
<body data-spy="scroll" data-target="#FExxx-nav-sidebar">

    <header id="FExxx-nav" class="FExxx-nav">
        <div class="FExxx-options">
            <i id="sidebar_icon" class="icon ion-android-storage"></i>
            <i id="expand_icon" class="icon ion-arrow-expand"></i>
        </div>
        <div class="grid grid-pad">
            <nav>
                <ul class="nav">
                    {% for element in menu %}
                    <li><a href="/{{element}}">{{element}}</a></li>
                    {% endfor %}
                </ul>
            </nav>
        </div>
    </header>

    {% block content %}{% endblock %}

</body>
</html>