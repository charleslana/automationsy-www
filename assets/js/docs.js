(function () {
  "use strict";

  function setActiveItem() {
    var hash = window.location.hash;

    if (hash === "") {
      return;
    }

    var link = document.querySelector('.bd-aside a[href="' + hash + '"]');

    if (!link) {
      return;
    }

    var active = document.querySelector(".bd-aside .active");
    var parent = link.parentNode.parentNode.previousElementSibling;

    link.classList.add("active");

    if (parent.classList.contains("collapsed")) {
      parent.click();
    }

    if (!active) {
      return;
    }

    var expanded = active.parentNode.parentNode.previousElementSibling;

    active.classList.remove("active");

    if (expanded && parent !== expanded) {
      expanded.click();
    }
  }

  setActiveItem();
  window.addEventListener("hashchange", setActiveItem);

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("goToTop").style.display = "block";
      return;
    }
    document.getElementById("goToTop").style.display = "none";
  }

  window.onscroll = function () {
    scrollFunction();
  };

  document.getElementById("goToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function onSearch() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".list-unstyled.ps-3");
    ul.forEach((ul) => {
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    });
  }

  document.getElementById("search").addEventListener("keyup", function (e) {
    onSearch();
  });

  document
    .getElementById("selectVersion")
    .addEventListener("change", function () {
      if (this.value == 1) {
        window.location.href = "docs.html#start";
        return;
      }
      window.location.href = "docs-v2.html#start";
    });
})();
