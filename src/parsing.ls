comment = /^\s*\#.*$/

parsing = module.exports = {}

parsing.generatorTuples = (lines) ->
  index = 0
  tuple = []
  while consume
    [index, comment] = cosumeComment lines index
    [index, code]  = consumeCode lines index
    index.push [comment, code]
    break if index == lines.lenght
  tuple

parsing.consumeComment = (lines, index) ->
  comments = ""
  for i from index til lines.length
    if lines[i].match comment then comments += lines[i] + '\n' else  break
  [i, comments]

parsing.consumeCode = (lines, index) ->
  code = ""
  for i from index to lines.length
    if not lines[i].match comment then code +=  lines[i] + '\n' else  break
  [i, code]
