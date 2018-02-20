'use strict';

(function () {
    'use strict';

    var Q = function Q(selector) {
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

    var display = function (what) {
        var root = Q(what);
        var position = root.querySelector('.display-position');
        var number = root.querySelector('.display-number');
        var img = root.querySelector('.display-img');
        var blank_img = img.src;
        var name = root.querySelector('.display-name');
        var party = root.querySelector('.display-party');
        var body = root.querySelector('.display-body');
        var footer = root.querySelector('.display-footer');
        var limit = 2;
        return {
            insert: function insert(num) {
                if (isNaN(num) || num < 0) return false;
                if (number.textContent.length >= limit) return false;
                number.textContent += num;
                if (number.textContent.length === limit) findCandidate(number.textContent.trim());
            },
            clear: function clear() {
                number.textContent = '';
                img.src = blank_img;
                name.textContent = '';
                party.textContent = '';
                body.setAttribute('hidden', true);
                footer.setAttribute('hidden', true);
            },
            confirm: function confirm() {
                console.log('verde para confirmar');
            },
            blank: function blank() {
                console.log('branco para votar em branco');
            }
        };
    }('.display');

    _($('.panel button')).forEach(function (btn) {
        return btn.addEventListener('click', function () {
            panelAction[this.dataset.click].call(this);
        });
    });

    var panelAction = {
        digitar: function digitar() {
            display.insert(this.textContent.trim());
        },
        branco: function branco() {
            display.blank();
        },
        corrigir: function corrigir() {
            display.clear();
        },
        confirmar: function confirmar() {
            display.confirm();
        }
    };

    function findCandidate(num) {
        console.log('Procurar candidato', num);
    }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiUSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwiJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJpdGVyYWJsZSIsIkZJUkVCQVNFX0FVVEgiLCJmaXJlYmFzZSIsImF1dGgiLCJGSVJFQkFTRV9EQVRBQkFTRSIsImRhdGFiYXNlIiwiZGlzcGxheSIsIndoYXQiLCJyb290IiwicG9zaXRpb24iLCJudW1iZXIiLCJpbWciLCJibGFua19pbWciLCJzcmMiLCJuYW1lIiwicGFydHkiLCJib2R5IiwiZm9vdGVyIiwibGltaXQiLCJpbnNlcnQiLCJpc05hTiIsIm51bSIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiZmluZENhbmRpZGF0ZSIsInRyaW0iLCJjbGVhciIsInNldEF0dHJpYnV0ZSIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiYmxhbmsiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhbmVsQWN0aW9uIiwiZGF0YXNldCIsImNsaWNrIiwiZGlnaXRhciIsImJyYW5jbyIsImNvcnJpZ2lyIiwiY29uZmlybWFyIl0sIm1hcHBpbmdzIjoiOztBQUFDLGFBQVk7QUFDYjs7QUFFQSxRQUFNQSxJQUFJLFNBQUpBLENBQUk7QUFBQSxlQUFZQyxTQUFTQyxhQUFULENBQXVCQyxRQUF2QixDQUFaO0FBQUEsS0FBVjtBQUNBLFFBQU1DLElBQUksU0FBSkEsQ0FBSTtBQUFBLGVBQVlILFNBQVNJLGdCQUFULENBQTBCRixRQUExQixDQUFaO0FBQUEsS0FBVjtBQUNBLFFBQU1HLElBQUksU0FBSkEsQ0FBSTtBQUFBLGVBQVlDLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkMsUUFBM0IsS0FBd0MsRUFBcEQ7QUFBQSxLQUFWOztBQUVBLFFBQU1DLGdCQUFnQkMsU0FBU0MsSUFBVCxFQUF0QjtBQUNBLFFBQU1DLG9CQUFvQkYsU0FBU0csUUFBVCxFQUExQjs7QUFFQSxRQUFNQyxVQUFXLFVBQVNDLElBQVQsRUFBZTtBQUM1QixZQUFNQyxPQUFPbkIsRUFBRWtCLElBQUYsQ0FBYjtBQUNBLFlBQU1FLFdBQVlELEtBQUtqQixhQUFMLENBQW1CLG1CQUFuQixDQUFsQjtBQUNBLFlBQU1tQixTQUFZRixLQUFLakIsYUFBTCxDQUFtQixpQkFBbkIsQ0FBbEI7QUFDQSxZQUFNb0IsTUFBWUgsS0FBS2pCLGFBQUwsQ0FBbUIsY0FBbkIsQ0FBbEI7QUFDQSxZQUFNcUIsWUFBWUQsSUFBSUUsR0FBdEI7QUFDQSxZQUFNQyxPQUFZTixLQUFLakIsYUFBTCxDQUFtQixlQUFuQixDQUFsQjtBQUNBLFlBQU13QixRQUFZUCxLQUFLakIsYUFBTCxDQUFtQixnQkFBbkIsQ0FBbEI7QUFDQSxZQUFNeUIsT0FBWVIsS0FBS2pCLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBbEI7QUFDQSxZQUFNMEIsU0FBWVQsS0FBS2pCLGFBQUwsQ0FBbUIsaUJBQW5CLENBQWxCO0FBQ0EsWUFBTTJCLFFBQVksQ0FBbEI7QUFDQSxlQUFPO0FBQ0hDLG9CQUFRLHFCQUFPO0FBQ1gsb0JBQUlDLE1BQU1DLEdBQU4sS0FBY0EsTUFBTSxDQUF4QixFQUEyQixPQUFPLEtBQVA7QUFDM0Isb0JBQUlYLE9BQU9ZLFdBQVAsQ0FBbUJDLE1BQW5CLElBQTZCTCxLQUFqQyxFQUF3QyxPQUFPLEtBQVA7QUFDeENSLHVCQUFPWSxXQUFQLElBQXNCRCxHQUF0QjtBQUNBLG9CQUFJWCxPQUFPWSxXQUFQLENBQW1CQyxNQUFuQixLQUE4QkwsS0FBbEMsRUFBeUNNLGNBQWNkLE9BQU9ZLFdBQVAsQ0FBbUJHLElBQW5CLEVBQWQ7QUFDNUMsYUFORTtBQU9IQyxtQkFBTyxpQkFBTTtBQUNUaEIsdUJBQU9ZLFdBQVAsR0FBcUIsRUFBckI7QUFDQVgsb0JBQUlFLEdBQUosR0FBVUQsU0FBVjtBQUNBRSxxQkFBS1EsV0FBTCxHQUFtQixFQUFuQjtBQUNBUCxzQkFBTU8sV0FBTixHQUFvQixFQUFwQjtBQUNBTixxQkFBS1csWUFBTCxDQUFrQixRQUFsQixFQUE0QixJQUE1QjtBQUNBVix1QkFBT1UsWUFBUCxDQUFvQixRQUFwQixFQUE4QixJQUE5QjtBQUNILGFBZEU7QUFlSEMscUJBQVMsbUJBQU07QUFDWEMsd0JBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNILGFBakJFO0FBa0JIQyxtQkFBTyxpQkFBTTtBQUNURix3QkFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0g7QUFwQkUsU0FBUDtBQXNCSCxLQWpDZSxDQWlDYixVQWpDYSxDQUFoQjs7QUFtQ0FuQyxNQUFFRixFQUFFLGVBQUYsQ0FBRixFQUFzQnVDLE9BQXRCLENBQThCO0FBQUEsZUFBT0MsSUFBSUMsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBVztBQUMxRUMsd0JBQVksS0FBS0MsT0FBTCxDQUFhQyxLQUF6QixFQUFnQ3RDLElBQWhDLENBQXFDLElBQXJDO0FBQ0gsU0FGb0MsQ0FBUDtBQUFBLEtBQTlCOztBQUlBLFFBQU1vQyxjQUFjO0FBQ2hCRyxpQkFBVyxtQkFBVztBQUFDaEMsb0JBQVFhLE1BQVIsQ0FBZSxLQUFLRyxXQUFMLENBQWlCRyxJQUFqQixFQUFmO0FBQXlDLFNBRGhEO0FBRWhCYyxnQkFBVyxrQkFBVztBQUFDakMsb0JBQVF5QixLQUFSO0FBQWlCLFNBRnhCO0FBR2hCUyxrQkFBVyxvQkFBVztBQUFDbEMsb0JBQVFvQixLQUFSO0FBQWlCLFNBSHhCO0FBSWhCZSxtQkFBVyxxQkFBVztBQUFDbkMsb0JBQVFzQixPQUFSO0FBQW1CO0FBSjFCLEtBQXBCOztBQU9BLGFBQVNKLGFBQVQsQ0FBdUJILEdBQXZCLEVBQTRCO0FBQ3hCUSxnQkFBUUMsR0FBUixDQUFZLG9CQUFaLEVBQWtDVCxHQUFsQztBQUNIO0FBRUEsQ0E1REEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxuY29uc3QgUSA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5jb25zdCAkID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IF8gPSBpdGVyYWJsZSA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSkgfHwgW107XHJcblxyXG5jb25zdCBGSVJFQkFTRV9BVVRIID0gZmlyZWJhc2UuYXV0aCgpO1xyXG5jb25zdCBGSVJFQkFTRV9EQVRBQkFTRSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gKGZ1bmN0aW9uKHdoYXQpIHtcclxuICAgIGNvbnN0IHJvb3QgPSBRKHdoYXQpO1xyXG4gICAgY29uc3QgcG9zaXRpb24gID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1wb3NpdGlvbicpO1xyXG4gICAgY29uc3QgbnVtYmVyICAgID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1udW1iZXInKTtcclxuICAgIGNvbnN0IGltZyAgICAgICA9IHJvb3QucXVlcnlTZWxlY3RvcignLmRpc3BsYXktaW1nJyk7XHJcbiAgICBjb25zdCBibGFua19pbWcgPSBpbWcuc3JjO1xyXG4gICAgY29uc3QgbmFtZSAgICAgID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1uYW1lJyk7XHJcbiAgICBjb25zdCBwYXJ0eSAgICAgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXBhcnR5Jyk7XHJcbiAgICBjb25zdCBib2R5ICAgICAgPSByb290LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWJvZHknKTtcclxuICAgIGNvbnN0IGZvb3RlciAgICA9IHJvb3QucXVlcnlTZWxlY3RvcignLmRpc3BsYXktZm9vdGVyJyk7XHJcbiAgICBjb25zdCBsaW1pdCAgICAgPSAyO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbnNlcnQ6IG51bSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc05hTihudW0pIHx8IG51bSA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKG51bWJlci50ZXh0Q29udGVudC5sZW5ndGggPj0gbGltaXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgbnVtYmVyLnRleHRDb250ZW50ICs9IG51bTtcclxuICAgICAgICAgICAgaWYgKG51bWJlci50ZXh0Q29udGVudC5sZW5ndGggPT09IGxpbWl0KSBmaW5kQ2FuZGlkYXRlKG51bWJlci50ZXh0Q29udGVudC50cmltKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXI6ICgpID0+IHtcclxuICAgICAgICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBibGFua19pbWc7XHJcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgcGFydHkudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xyXG4gICAgICAgICAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbmZpcm06ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZlcmRlIHBhcmEgY29uZmlybWFyJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBibGFuazogKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYnJhbmNvIHBhcmEgdm90YXIgZW0gYnJhbmNvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgnLmRpc3BsYXknKTtcclxuXHJcbl8oJCgnLnBhbmVsIGJ1dHRvbicpKS5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHBhbmVsQWN0aW9uW3RoaXMuZGF0YXNldC5jbGlja10uY2FsbCh0aGlzKTtcclxufSkpO1xyXG5cclxuY29uc3QgcGFuZWxBY3Rpb24gPSB7XHJcbiAgICBkaWdpdGFyOiAgIGZ1bmN0aW9uKCkge2Rpc3BsYXkuaW5zZXJ0KHRoaXMudGV4dENvbnRlbnQudHJpbSgpKTt9LFxyXG4gICAgYnJhbmNvOiAgICBmdW5jdGlvbigpIHtkaXNwbGF5LmJsYW5rKCk7fSxcclxuICAgIGNvcnJpZ2lyOiAgZnVuY3Rpb24oKSB7ZGlzcGxheS5jbGVhcigpO30sXHJcbiAgICBjb25maXJtYXI6IGZ1bmN0aW9uKCkge2Rpc3BsYXkuY29uZmlybSgpO31cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRDYW5kaWRhdGUobnVtKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUHJvY3VyYXIgY2FuZGlkYXRvJywgbnVtKTtcclxufVxuXG59KCkpO1xuIl19
