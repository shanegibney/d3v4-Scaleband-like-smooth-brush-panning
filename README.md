# D3 v4 Bar Chart - Smooth Brush Panning for Scaleband-like domain

Using the brush to zoom in on a bar chart which uses the scaleband is not smooth.
Therefore I used a linearscale here, with bar chart x-axis values in data.json of simply 1,2,3,4, etc. Then each value on the x-axis is replaced with the data value at data.name.

For example the brush's x-axis identifies values and if they exist replaces them with the name value in the data.

```var xAxis2 = d3.axisBottom(x2).tickSize(0)
  .tickFormat(function(d) {
    var found = data.find(function(e) {
      return e.num === d
    });
    return found ? found.name : null;
  })
```

There is an issue that when the x-axis is expanded, which is what happens when you zoom in on it using the brush, extra ticks values appears. This was prevented using the lines of code,

```      if (!found) {
        d3.select(this.parentNode).select("line").remove()
      }
```

gh-pages [demo](https://shanegibney.github.io/d3v4-Scaleband-like-smooth-brush-panning/)

<a href="https://shanegibney.github.io/d3v4-Scaleband-like-smooth-brush-panning/"><img width="981" alt="screen shot 2018-06-04 at 13 20 22" src="https://user-images.githubusercontent.com/17167992/40917156-21ab1fa4-67fa-11e8-9452-6dc230febbf8.png"></a>
