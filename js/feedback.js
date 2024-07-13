(function() {
    $(function() {
      var gui, input, mouth, render, setObjectKeyframe, update;
      document.querySelector(".form").classList.remove("hidden");
      input = {
        rating: 80
      };
      mouth = {
        eyes: {
          width: 30,
          height: 30
        },
        sides: 350,
        middle: {
          top: 450,
          bottom: 550
        }
      };
      render = function() {
        $("#mouth").attr("d", `M100,${mouth.sides} Q300,${mouth.middle.top} 500,${mouth.sides} Q300,${mouth.middle.bottom} 100,${mouth.sides} z`);
        $("#face").attr("fill", `hsl(${Math.round(input.rating)}, 60%, 74%)`);
        $(".eye--left").attr("d", `M185 200 a ${mouth.eyes.height} ${mouth.eyes.width} 0 1 0 -1 0 z`);
        return $(".eye--right").attr("d", `M415 200 a ${mouth.eyes.height} ${mouth.eyes.width} 0 1 0 -1 0 z`);
      };
      update = function() {
        var endKeyframePosition, endKeyframeValue, i, index, keyframes, position, ref, relativePosition, results, startKeyframePosition, startKeyframeValue;
        position = input.rating;
        keyframes = {
          0: {
            eyes: {
              width: 20,
              height: 35
            },
            sides: 444,
            middle: {
              top: 184,
              bottom: 390
            }
          },
          25: {
            eyes: {
              width: 23,
              height: 32
            },
            sides: 423,
            middle: {
              top: 217,
              bottom: 217
            },
            eyes: {
              width: 30,
              height: 30
            }
          },
          50: {
            eyes: {
              width: 30,
              height: 30
            },
            sides: 400,
            middle: {
              top: 400,
              bottom: 400
            }
          },
          75: {
            eyes: {
              width: 40,
              height: 30
            },
            sides: 350,
            middle: {
              top: 450,
              bottom: 596
            }
          },
          100: {
            eyes: {
              width: 50,
              height: 30
            },
            sides: 360,
            middle: {
              top: 360,
              bottom: 680
            }
          }
        };
        results = [];
        for (index = i = 0, ref = Object.keys(keyframes).length - 1; (0 <= ref ? i <= ref : i >= ref); index = 0 <= ref ? ++i : --i) {
          startKeyframePosition = parseFloat(Object.keys(keyframes)[index]);
          endKeyframePosition = parseFloat(Object.keys(keyframes)[index + 1]);
          startKeyframeValue = keyframes[startKeyframePosition];
          endKeyframeValue = keyframes[endKeyframePosition];
          if ((startKeyframePosition <= position && position <= endKeyframePosition)) {
            relativePosition = (position - startKeyframePosition) / (endKeyframePosition - startKeyframePosition);
            setObjectKeyframe(relativePosition, mouth, startKeyframeValue, endKeyframeValue);
          }
          results.push(render());
        }
        return results;
      };
      setObjectKeyframe = function(position, object, startKeyframeObject, endKeyframeObject) {
        var endValue, i, key, len, ref, results, startValue;
        ref = Object.keys(startKeyframeObject);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          key = ref[i];
          startValue = startKeyframeObject[key];
          endValue = endKeyframeObject[key];
          if (typeof startKeyframeObject[key] === "number") {
            results.push(object[key] = (endValue - startValue) * position + startValue);
          } else if (typeof startKeyframeObject[key] === "object") {
            results.push(setObjectKeyframe(position, object[key], startValue, endValue));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      gui = new dat.GUI();
      gui.close();
      gui.add(mouth, "sides", 0, 500).onChange(render);
      gui.add(mouth.middle, "top", 0, 1000).onChange(render);
      gui.add(mouth.middle, "bottom", 0, 1000).onChange(render);
      gui.add(mouth.eyes, "height", 1, 50).onChange(render);
      gui.add(mouth.eyes, "width", 1, 50).onChange(render);
      gui.add(input, "rating", 0, 100).onChange(update);
      window.updateSlider = function(value) {
        var listIndex;
        input.rating = value;
        update();
        listIndex = ~~(value / 10);
        return document.querySelector(".sliding-list ul").style.transform = `translateY(${-listIndex * 1.5}em)`;
      };
      render();
      return updateSlider(80);
    });
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7QUFDRixRQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxpQkFBQSxFQUFBO0lBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBK0IsQ0FBQyxTQUFTLENBQUMsTUFBMUMsQ0FBaUQsUUFBakQ7SUFFQSxLQUFBLEdBQ0U7TUFBQSxNQUFBLEVBQVE7SUFBUjtJQUVGLEtBQUEsR0FDRTtNQUFBLElBQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxFQUFQO1FBQ0EsTUFBQSxFQUFRO01BRFIsQ0FERjtNQUdBLEtBQUEsRUFBTyxHQUhQO01BSUEsTUFBQSxFQUNFO1FBQUEsR0FBQSxFQUFLLEdBQUw7UUFDQSxNQUFBLEVBQVE7TUFEUjtJQUxGO0lBVUYsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO01BRVAsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLElBQVosQ0FBaUIsR0FBakIsRUFBc0IsQ0FBQSxLQUFBLENBQUEsQ0FBUSxLQUFLLENBQUMsS0FBZCxDQUFBLE1BQUEsQ0FBQSxDQUE0QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQXpDLENBQUEsS0FBQSxDQUFBLENBQW9ELEtBQUssQ0FBQyxLQUExRCxDQUFBLE1BQUEsQ0FBQSxDQUF3RSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQXJGLENBQUEsS0FBQSxDQUFBLENBQW1HLEtBQUssQ0FBQyxLQUF6RyxDQUFBLEVBQUEsQ0FBdEI7TUFFQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFnQixNQUFoQixFQUF3QixDQUFBLElBQUEsQ0FBQSxDQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsS0FBSyxDQUFDLE1BQWpCLENBQVAsQ0FBQSxXQUFBLENBQXhCO01BRUEsQ0FBQSxDQUFFLFlBQUYsQ0FB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aEMsRUFBbUMsSUFBbkMsQ0FBd0MsQ0FBQyxRQUF6QyxDQUFrRCxNQUFsRDtJQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBSyxDQUFDLElBQWQsRUFBb0IsUUFBcEIsRUFBOEIsQ0FBOUIsRUFBaUMsRUFBakMsQ0FBb0MsQ0FBQyxRQUFyQyxDQUE4QyxNQUE5QztJQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBSyxDQUFDLElBQWQsRUFBb0IsT0FBcEIsRUFBNkIsQ0FBN0IsRUFBZ0MsRUFBaEMsQ0FBbUMsQ0FBQyxRQUFwQyxDQUE2QyxNQUE3QztJQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixFQUFlLFFBQWYsRUFBeUIsQ0FBekIsRUFBNEIsR0FBNUIsQ0FBZ0MsQ0FBQyxRQUFqQyxDQUEwQyxNQUExQztJQUlBLE1BQU0sQ0FBQyxZQUFQLEdBQXNCLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDeEIsVUFBQTtNQUFJLEtBQUssQ0FBQyxNQUFOLEdBQWU7TUFDZixNQUFBLENBQUE7TUFDQSxTQUFBLEdBQVksQ0FBQyxDQUFDLENBQUMsS0FBQSxHQUFNLEVBQVA7YUFDZCxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBMEMsQ0FBQyxLQUFLLENBQUMsU0FBakQsR0FBNkQsQ0FBQSxXQUFBLENBQUEsQ0FBYyxDQUFDLFNBQUQsR0FBVyxHQUF6QixDQUFBLEdBQUE7SUFKekM7SUFNdEIsTUFBQSxDQUFBO1dBQ0EsWUFBQSxDQUFhLEVBQWI7RUF2SEEsQ0FBRjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJCAtPlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICBcbiAgaW5wdXQgPVxuICAgIHJhdGluZzogODBcbiAgICBcbiAgbW91dGggPVxuICAgIGV5ZXM6XG4gICAgICB3aWR0aDogMzBcbiAgICAgIGhlaWdodDogMzBcbiAgICBzaWRlczogMzUwXG4gICAgbWlkZGxlOlxuICAgICAgdG9wOiA0NTBcbiAgICAgIGJvdHRvbTogNTUwXG4gICAgXG4gICAgICBcblxuICByZW5kZXIgPSAtPlxuXG4gICAgJChcIiNtb3V0aFwiKS5hdHRyKFwiZFwiLCBcIk0xMDAsI3ttb3V0aC5zaWRlc30gUTMwMCwje21vdXRoLm1pZGRsZS50b3B9IDUwMCwje21vdXRoLnNpZGVzfSBRMzAwLCN7bW91dGgubWlkZGxlLmJvdHRvbX0gMTAwLCN7bW91dGguc2lkZXN9IHpcIilcblxuICAgICQoXCIjZmFjZVwiKS5hdHRyKFwiZmlsbFwiLCBcImhzbCgje01hdGgucm91bmQoaW5wdXQucmF0aW5nKX0sIDYwJSwgNzQlKVwiKVxuICAgIFxuICAgICQoXCIuZXllLS1sZWZ0XCIpLmF0dHIoXCJkXCIsIFwiTTE4NSAyMDAgYSAje21vdXRoLmV5ZXMuaGVpZ2h0fSAje21vdXRoLmV5ZXMud2lkdGh9IDAgMSAwIC0xIDAgelwiKVxuICAgICQoXCIuZXllLS1yaWdodFwiKS5hdHRyKFwiZFwiLCBcIk00MTUgMjAwIGEgI3ttb3V0aC5leWVzLmhlaWdodH0gI3ttb3V0aC5leWVzLndpZHRofSAwIDEgMCAtMSAwIHpcIilcbiAgICBcbiAgdXBkYXRlID0gLT5cbiAgICBwb3NpdGlvbiA9IGlucHV0LnJhdGluZ1xuICAgIFxuICAgIGtleWZyYW1lcyA9XG4gICAgICAwOlxuICAgICAgICBleWVzOlxuICAgICAgICAgIHdpZHRoOiAyMFxuICAgICAgICAgIGhlaWdodDogMzVcbiAgICAgICAgc2lkZXM6IDQ0NFxuICAgICAgICBtaWRkbGU6XG4gICAgICAgICAgdG9wOiAxODRcbiAgICAgICAgICBib3R0b206IDM5MFxuICAgICAgMjU6XG4gICAgICAgIGV5ZXM6XG4gICAgICAgICAgd2lkdGg6IDIzXG4gICAgICAgICAgaGVpZ2h0OiAzMlxuICAgICAgICBzaWRlczogNDIzXG4gICAgICAgIG1pZGRsZTpcbiAgICAgICAgICB0b3A6IDIxN1xuICAgICAgICAgIGJvdHRvbTogMjE3XG4gICAgICAgIGV5ZXM6XG4gICAgICAgICAgd2lkdGg6IDMwXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgNTA6XG4gICAgICAgIGV5ZXM6XG4gICAgICAgICAgd2lkdGg6IDMwXG4gICAgICAgICAgaGVpZ2h0OiAzMFxuICAgICAgICAgIFxuICAgICAgICBzaWRlczogNDAwXG4gICAgICAgIG1pZGRsZTpcbiAgICAgICAgICB0b3A6IDQwMFxuICAgICAgICAgIGJvdHRvbTogNDAwXG4gICAgICA3NTpcbiAgICAgICAgZXllczpcbiAgICAgICAgICB3aWR0aDogNDBcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIHNpZGVzOiAzNTBcbiAgICAgICAgbWlkZGxlOlxuICAgICAgICAgIHRvcDogNDUwXG4gICAgICAgICAgYm90dG9tOiA1OTZcbiAgICAgIDEwMDpcbiAgICAgICAgZXllczpcbiAgICAgICAgICB3aWR0aDogNTBcbiAgICAgICAgICBoZWlnaHQ6IDMwXG4gICAgICAgIHNpZGVzOiAzNjBcbiAgICAgICAgbWlkZGxlOlxuICAgICAgICAgIHRvcDogMzYwXG4gICAgICAgICAgYm90dG9tOiA2ODBcbiAgICAgICAgICBcbiAgICBcbiAgICBmb3IgaW5kZXggaW4gWzAuLk9iamVjdC5rZXlzKGtleWZyYW1lcykubGVuZ3RoLTFdXG4gICAgICBzdGFydEtleWZyYW1lUG9zaXRpb24gPSBwYXJzZUZsb2F0KE9iamVjdC5rZXlzKGtleWZyYW1lcylbaW5kZXhdKVxuICAgICAgZW5kS2V5ZnJhbWVQb3NpdGlvbiA9IHBhcnNlRmxvYXQoT2JqZWN0LmtleXMoa2V5ZnJhbWVzKVtpbmRleCsxXSlcbiAgICAgIHN0YXJ0S2V5ZnJhbWVWYWx1ZSA9IGtleWZyYW1lc1tzdGFydEtleWZyYW1lUG9zaXRpb25dXG4gICAgICBlbmRLZXlmcmFtZVZhbHVlID0ga2V5ZnJhbWVzW2VuZEtleWZyYW1lUG9zaXRpb25dXG4gICAgICBcbiAgICAgIFxuICAgICAgaWYgc3RhcnRLZXlmcmFtZVBvc2l0aW9uIDw9IHBvc2l0aW9uIDw9IGVuZEtleWZyYW1lUG9zaXRpb25cbiAgICAgICAgXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSAgKHBvc2l0aW9uIC0gc3RhcnRLZXlmcmFtZVBvc2l0aW9uKS8oZW5kS2V5ZnJhbWVQb3NpdGlvbiAtIHN0YXJ0S2V5ZnJhbWVQb3NpdGlvbilcbiAgICAgICAgc2V0T2JqZWN0S2V5ZnJhbWUocmVsYXRpdmVQb3NpdGlvbiwgbW91dGgsIHN0YXJ0S2V5ZnJhbWVWYWx1ZSwgZW5kS2V5ZnJhbWVWYWx1ZSlcbiAgICAgIFxuICAgICAgcmVuZGVyKClcblxuICBzZXRPYmplY3RLZXlmcmFtZSA9IChwb3NpdGlvbiwgb2JqZWN0LCBzdGFydEtleWZyYW1lT2JqZWN0LCBlbmRLZXlmcmFtZU9iamVjdCktPlxuICAgIGZvciBrZXkgaW4gT2JqZWN0LmtleXMoc3RhcnRLZXlmcmFtZU9iamVjdClcbiAgICAgIHN0YXJ0VmFsdWUgPSBzdGFydEtleWZyYW1lT2JqZWN0W2tleV1cbiAgICAgIGVuZFZhbHVlID0gZW5kS2V5ZnJhbWVPYmplY3Rba2V5XVxuICAgICAgaWYgdHlwZW9mIHN0YXJ0S2V5ZnJhbWVPYmplY3Rba2V5XSBpcyBcIm51bWJlclwiXG4gICAgICAgIG9iamVjdFtrZXldID0gKGVuZFZhbHVlIC0gc3RhcnRWYWx1ZSkgKiBwb3NpdGlvbiArIHN0YXJ0VmFsdWVcbiAgICAgIGVsc2UgaWYgdHlwZW9mIHN0YXJ0S2V5ZnJhbWVPYmplY3Rba2V5XSBpcyBcIm9iamVjdFwiXG4gICAgICAgIHNldE9iamVjdEtleWZyYW1lKHBvc2l0aW9uLCBvYmplY3Rba2V5XSwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUpXG5cblxuICAgICAgICBcbiAgZ3VpID0gbmV3IGRhdC5HVUkoKVxuICBndWkuY2xvc2UoKVxuICBndWkuYWRkKG1vdXRoLCBcInNpZGVzXCIsIDAsIDUwMCkub25DaGFuZ2UocmVuZGVyKVxuICBndWkuYWRkKG1vdXRoLm1pZGRsZSwgXCJ0b3BcIiwgMCwgMTAwMCkub25DaGFuZ2UocmVuZGVyKVxuICBndWkuYWRkKG1vdXRoLm1pZGRsZSwgXCJib3R0b21cIiwgMCwgMTAwMCkub25DaGFuZ2UocmVuZGVyKVxuICBndWkuYWRkKG1vdXRoLmV5ZXMsIFwiaGVpZ2h0XCIsIDEsIDUwKS5vbkNoYW5nZShyZW5kZXIpXG4gIGd1aS5hZGQobW91dGguZXllcywgXCJ3aWR0aFwiLCAxLCA1MCkub25DaGFuZ2UocmVuZGVyKVxuICBndWkuYWRkKGlucHV0LCBcInJhdGluZ1wiLCAwLCAxMDApLm9uQ2hhbmdlKHVwZGF0ZSlcblxuICBcbiAgICBcbiAgd2luZG93LnVwZGF0ZVNsaWRlciA9ICh2YWx1ZSktPlxuICAgIGlucHV0LnJhdGluZyA9IHZhbHVlXG4gICAgdXBkYXRlKClcbiAgICBsaXN0SW5kZXggPSB+fih2YWx1ZS8xMClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRpbmctbGlzdCB1bFwiKS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoI3stbGlzdEluZGV4KjEuNX1lbSlcIlxuICAgIFxuICByZW5kZXIoKVxuICB1cGRhdGVTbGlkZXIoODApICAgXG4gICAgXG4gIFxuXG4gIFxuICAiXX0=
  //# sourceURL=coffeescript