window.onload = function() {
  var projects = document.querySelectorAll('figure');
  var worksContainers = document.querySelectorAll('.works-wrapper');

  var filters = document.querySelectorAll('.tag');
	var allFilter = document.querySelector('#all-filter');
	var webFilter = document.querySelector('#web-filter');
	var mobileFilter = document.querySelector('#mobile-filter');
	var reactFilter = document.querySelector('#react-filter');
  var phpFilter = document.querySelector('#php-filter');
  
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add smooth scroll behavior to anchor links
  for (var i = 0; i < anchorLinks.length; i ++) {
    anchorLinks[i].addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  function isHidden(value) {
    return value.classList.contains('hidden');
  }
  
  // Hide containers when all projects inside are hidden
  function hideContainers() {
    for (var i = 0; i < worksContainers.length; i ++) {
      var childrenProjects = Array.from(worksContainers[i].getElementsByTagName('figure'));
      
      if (childrenProjects.every(isHidden)) {
        worksContainers[i].classList.add('hidden');
      } else {
        worksContainers[i].classList.remove('hidden');
      }
    }
  }

  // Display all projects and containers
  function clearFilter() {
		for (var i = 0; i < projects.length; i ++) {
      projects[i].classList.remove('hidden');
    }
    
    for (var i = 0; i < worksContainers.length; i ++) {
      worksContainers[i].classList.remove('hidden');
    }
  }

  // Display only projects with given tag
  function filterByTag(tag) {
		for (var i = 0; i < projects.length; i ++) {
      if (!projects[i].classList.contains(tag)) {
        projects[i].classList.add('hidden');
      } else {
        projects[i].classList.remove('hidden');
      }
    }
    
    hideContainers();
  }

  // Remove active style from tags
  function disableTags() {
    for (var i = 0; i < filters.length; i ++) {
      filters[i].classList.remove('active-tag');
		}
  }

  webFilter.onclick = function() {
    disableTags();
    webFilter.classList.add('active-tag');

    filterByTag('web');
  };

  mobileFilter.onclick = function() {
    disableTags();
    mobileFilter.classList.add('active-tag');

		filterByTag('mobile');
  };

	reactFilter.onclick = function() {
    disableTags();
    reactFilter.classList.add('active-tag');

    filterByTag('react');
  };

  phpFilter.onclick = function() {
    disableTags();
    phpFilter.classList.add('active-tag');

    filterByTag('php');
  };
  
	allFilter.onclick = function() {
    disableTags();
    allFilter.classList.add('active-tag');

    clearFilter();
	};
};