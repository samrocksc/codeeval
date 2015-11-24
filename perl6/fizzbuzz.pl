$divider1 = @*ARGS[2]
$divider2 = @*ARGS[3]
$range = @*ARGS[4]
for 1 .. $range {
    when $_ %% ($divider2 & $divider2) { say 'FizzBuzz'; }
    when $_ %% $divider1 { say 'Fizz'; }
    when $_ %% $divider2 { say 'Buzz'; }
    default            { .say; }
}
