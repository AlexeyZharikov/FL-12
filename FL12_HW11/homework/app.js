const structure = [{
    'folder': true,
    'title': 'Films',
    'children': [{
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [{
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [{
      'folder': true,
      'title': 'EPAM Homework answers',
      'children': null
    }]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
function displayJsonTree( data) {
  var htmlRetStr = "<ul class='folder-container'>";
  for (var key in data) {
    if (typeof(data[key])== 'object' && data[key] != null) {
      htmlRetStr += displayJsonTree( data[key] );
      htmlRetStr += '</ul></li>';
    } else if(data[key]==true){
      htmlRetStr += "<i class='close_folder material-icons'>folder</i><li class='folder-item'>" +  data["title"]+"</li><li class='folder-wrapper'>";
    }
    else if( key=='title' && data['folder']!=true ){
      htmlRetStr += "<i class='paper material-icons'>folder</i><li class='file-item'>" + data['title']+"</li>";
    }
  }
  return( htmlRetStr );
}


rootNode.innerHTML = displayJsonTree(structure);

let el = rootNode.querySelector('.folder-item');
el.addEventListener('click')