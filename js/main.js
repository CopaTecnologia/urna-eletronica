'use strict';

(function () {
    'use strict';

    var S = function S(selector) {
        return document.querySelector(selector);
    };
    var $ = function $(selector) {
        return document.querySelectorAll(selector);
    };
    var _ = function _(iterable) {
        return Array.prototype.slice.call(iterable) || [];
    };

    var FIREBASE_AUTH = firebase.auth();
    var FIREBASE_DATABASE = firebase.database();

    var display = S('.display');
    var buttons = $('.panel button');

    _(buttons).forEach(function (btn) {
        return btn.addEventListener('click', function () {
            panelAction[this.dataset.click].call(this);
        });
    });

    var panelAction = {
        digitar: function digitar() {
            console.log(this.textContent.trim());
        },
        branco: function branco() {
            console.log('branco para votar em branco');
        },
        corrigir: function corrigir() {
            console.log('laranja para corrigir');
        },
        confirmar: function confirmar() {
            console.log('verde para confirmar');
        }
    };
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiUyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwiJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJpdGVyYWJsZSIsIkZJUkVCQVNFX0FVVEgiLCJmaXJlYmFzZSIsImF1dGgiLCJGSVJFQkFTRV9EQVRBQkFTRSIsImRhdGFiYXNlIiwiZGlzcGxheSIsImJ1dHRvbnMiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhbmVsQWN0aW9uIiwiZGF0YXNldCIsImNsaWNrIiwiZGlnaXRhciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJicmFuY28iLCJjb3JyaWdpciIsImNvbmZpcm1hciJdLCJtYXBwaW5ncyI6Ijs7QUFBQyxhQUFZO0FBQ2I7O0FBRUEsUUFBTUEsSUFBSSxTQUFKQSxDQUFJO0FBQUEsZUFBWUMsU0FBU0MsYUFBVCxDQUF1QkMsUUFBdkIsQ0FBWjtBQUFBLEtBQVY7QUFDQSxRQUFNQyxJQUFJLFNBQUpBLENBQUk7QUFBQSxlQUFZSCxTQUFTSSxnQkFBVCxDQUEwQkYsUUFBMUIsQ0FBWjtBQUFBLEtBQVY7QUFDQSxRQUFNRyxJQUFJLFNBQUpBLENBQUk7QUFBQSxlQUFZQyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJDLFFBQTNCLEtBQXdDLEVBQXBEO0FBQUEsS0FBVjs7QUFFQSxRQUFNQyxnQkFBZ0JDLFNBQVNDLElBQVQsRUFBdEI7QUFDQSxRQUFNQyxvQkFBb0JGLFNBQVNHLFFBQVQsRUFBMUI7O0FBRUEsUUFBTUMsVUFBVWpCLEVBQUUsVUFBRixDQUFoQjtBQUNBLFFBQU1rQixVQUFVZCxFQUFFLGVBQUYsQ0FBaEI7O0FBRUFFLE1BQUVZLE9BQUYsRUFBV0MsT0FBWCxDQUFtQjtBQUFBLGVBQU9DLElBQUlDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDL0RDLHdCQUFZLEtBQUtDLE9BQUwsQ0FBYUMsS0FBekIsRUFBZ0NkLElBQWhDLENBQXFDLElBQXJDO0FBQ0gsU0FGeUIsQ0FBUDtBQUFBLEtBQW5COztBQUlBLFFBQU1ZLGNBQWM7QUFDaEJHLGlCQUFXLG1CQUFXO0FBQUNDLG9CQUFRQyxHQUFSLENBQVksS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsRUFBWjtBQUFzQyxTQUQ3QztBQUVoQkMsZ0JBQVcsa0JBQVc7QUFBQ0osb0JBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUE0QyxTQUZuRDtBQUdoQkksa0JBQVcsb0JBQVc7QUFBQ0wsb0JBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUFzQyxTQUg3QztBQUloQkssbUJBQVcscUJBQVc7QUFBQ04sb0JBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUFxQztBQUo1QyxLQUFwQjtBQU9DLENBeEJBLEdBQUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IFMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuY29uc3QgJCA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBfID0gaXRlcmFibGUgPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlcmFibGUpIHx8IFtdO1xyXG5cclxuY29uc3QgRklSRUJBU0VfQVVUSCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3QgRklSRUJBU0VfREFUQUJBU0UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG5cclxuY29uc3QgZGlzcGxheSA9IFMoJy5kaXNwbGF5Jyk7XHJcbmNvbnN0IGJ1dHRvbnMgPSAkKCcucGFuZWwgYnV0dG9uJyk7XHJcblxyXG5fKGJ1dHRvbnMpLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcGFuZWxBY3Rpb25bdGhpcy5kYXRhc2V0LmNsaWNrXS5jYWxsKHRoaXMpO1xyXG59KSk7XHJcblxyXG5jb25zdCBwYW5lbEFjdGlvbiA9IHtcclxuICAgIGRpZ2l0YXI6ICAgZnVuY3Rpb24oKSB7Y29uc29sZS5sb2codGhpcy50ZXh0Q29udGVudC50cmltKCkpO30sXHJcbiAgICBicmFuY286ICAgIGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKCdicmFuY28gcGFyYSB2b3RhciBlbSBicmFuY28nKTt9LFxyXG4gICAgY29ycmlnaXI6ICBmdW5jdGlvbigpIHtjb25zb2xlLmxvZygnbGFyYW5qYSBwYXJhIGNvcnJpZ2lyJyk7fSxcclxuICAgIGNvbmZpcm1hcjogZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coJ3ZlcmRlIHBhcmEgY29uZmlybWFyJyk7fVxyXG59O1xuXG59KCkpO1xuIl19
