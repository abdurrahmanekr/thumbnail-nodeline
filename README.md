# thumbnail-nodeline
Basic image resizer on nodejs

## Start
```
npm start
```

# Using
```
<width:heigth> <filepath> <blur>

Ex:
> 120:120 files/fox.jpg      # new file -> output/fox.jpg (120x120)
> files/fox.jpg              # new file -> output/fox.jpg (?x300)
> 120:120 files/fox.jpg 5    # new file -> output/fox.jpg (?x300)(blur rate 5)
```
