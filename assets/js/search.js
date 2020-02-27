
var documents = [{
    "id": 0,
    "url": "https://binga.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://binga.github.io/about/",
    "title": "About Me",
    "body": "I am Phani Srikanth and I currently work as a Data Scientist at Microsoft India in Hyderabad, India. I specialise in building machine learning solutions. A lot of my work has been around building learning algorithms on structured datasets from databases and extracting useful representations of entities from unstructured datasets such as images and text. Contact Me: LinkedIn Twitter "
    }, {
    "id": 2,
    "url": "https://binga.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://binga.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://binga.github.io/books/spirituality/2020/01/31/Siddhartha.html",
    "title": "Siddhartha By Herman Hesse",
    "body": "2020/01/31 -  Then his father realized that even now Siddhartha no longer dwelt with him in his home, that he had already left him. The Father touched Siddhartha’s shoulder.  A goal stood before Siddhartha, a single goal: to become empty, empty of thirst, empty of wishing, empty of dreams, empty of joy and sorrow.  I have never before seen a person glance and smile, sit and walk this way, he thought; truly, I wish to be able to glance and smile, sit and walk this way, too, thus free, thus venerable, thus concealed, thus open, thus child-like and mysterious. Truly, only a person who has succeeded in reaching the innermost part of his self would glance and walk this way.  I want to learn from myself, want to be my student, want to get to know myself, the secret of Siddhartha.  She taught him, that lovers must not part from one another after celebrating love, without one admiring the other, without being just as defeated as they have been victorious, so that with none of them should start feeling fed up or bored and get that evil feeling of having abused or having been abused.  A frightening emptiness was reflected back at him by the water, answering to the terrible emptiness in his soul.  Now Siddhartha also got some idea of why he had fought this self in vain as a Brahman, as a penitent. Too much knowledge had held him back, too many holy verses, too many sacrificial rules, to much self-castigation, so much doing and striving for that goal! Full of arrogance, he had been, always the smartest, always working the most, always one step ahead of all others, always the knowing and spiritual one, always the priest or wise one. Into being a priest, into this arrogance, into this spirituality, his self had retreated, there it sat firmly and grew, while he thought he would kill it by …more This was among the ferryman’s virtues one of the greatest: like only a few, he knew how to listen. Without him having spoken a word, the speaker sensed how Vasudeva let his words enter his mind, quiet, open, waiting, how he did not lose a single one, awaited not a single one with impatience, did not add his praise or rebuke, was just listening. Siddhartha felt, what a happy fortune it is, to confess to such a listener, to bury in his heart his own life, his own search, his own suffering.  These people are rare who know how to listen. And I did not meet a single one who knew it as well as you did. I will also learn in this respect from you.  Most of all, he learned from it to listen, to pay close attention with a quiet heart, with a waiting, opened soul, without passion, without a wish, without judgement, without an opinion. "
    }, {
    "id": 5,
    "url": "https://binga.github.io/books/philosophy/2020/01/20/The-Manual.html",
    "title": "The Manual By Epictetus",
    "body": "2020/01/20 -  Stoicism doesn’t mean repressing emotion and shunning pleasure, I learned, but—in essence—focusing on what is in our power and letting go of everything we can’t control.  When practical necessity demands that you desire or avoid something external—at work, for instance—act with steady deliberation, not hasty strain.  People who are ignorant of philosophy blame others for their own misfortunes. Those who are beginning to learn philosophy blame themselves. Those who have mastered philosophy blame no one.  So, if you have not been invited to a party, it is because you haven’t paid the price of the invitation. It costs social engagement, conversation, encouragement, and praise. If you are not willing to pay this price, do not be upset when you don’t receive an invitation.  Whenever misfortune befalls you, ask yourself how you would react if it were someone else in the same situation.  At a feast, taking the largest helping may be good for your appetite, but sharing generously is good for the spirit of the celebration. In this case, honoring your hosts and fellow guests should be valued above sating your hunger.  Care for your body as needed, but put your main energies and efforts into cultivating your mind.  Do not proclaim yourself a philosopher, or go around preaching your principles. Show them by example.  At a feast, do not give a speech about how everyone should eat. Only eat as you should. Inspiration to read this book: I&#39;d challenge anyone to read, say, The Manual by Epictetus, a former slave, and hardly the elite figure, like Aurelius, and not walk away with profound insights and techniques for coping with the human existence. https://t. co/ciFRyWI79e &mdash; DHH (@dhh) March 26, 2019"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}