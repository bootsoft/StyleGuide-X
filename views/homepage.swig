{% extends 'layout.swig' %}

{% block content %}
<div id="wrapper" class="grid grid-pad">
    <div id="sidebar_div" class="col-3-12" style="display: none">
        <div class="content">
            <nav id="FExxx-nav-sidebar" class="FExxx-nav-sidebar">
                <ul class="nav">
                    {% for element in elements %}
                    <li><a href="#{{element.slug}}">{{element.title}}</a></li>
                    {% endfor %}
                </ul>
            </nav>
        </div>
    </div>

    <div class="col-1-1 FExxx-content">
        <div class="content">
            {% for element in elements %}
            <article id="{{element.slug}}" class="FExxx-element">
                <h3>{{element.title}}</h3>
                {{element.comments | raw}}
                <hr/>
                {{element.content | raw}}
                <hr/>
                <pre class="prettyprint linenums">{{element.content}}</pre>
            </article>
            {% endfor %}
        </div>
    </div>

</div>
{% endblock %}
