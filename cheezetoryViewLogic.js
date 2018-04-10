<% let completionArray = [];
let goalsByDay = [];
let weekdays = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday']
for (var i = 0; i < weekdays.length; i++) {
  completionArray[i] = 0;
  goalsByDay[i] = 0;
  for (var j = 0; j < goals.length; j++) {
    if(goals[j].createdAt.getDay() === i) {
      completionArray[i] === 0 ? completionArray[i] = [goals[j].completed] : completionArray[i].push(goals[j].completed);
      goalsByDay[i] === 0 ? goalsByDay[i] = [[goals[j].text, goals[j].completed]] : goalsByDay[i].push([goals[j].text, goals[j].completed]);
    }
  }
}
goalsByDay.reverse();
completionArray.reverse();
var today = new Date().getDay();
for (var i = 0; i < weekdays.length - (today + 1); i++ ) {
  weekdays.push(weekdays.shift());
  goalsByDay.push(goalsByDay.shift());
  completionArray.push(completionArray.shift());
}
let streaks = [];
for (var i = 0; i < weekdays.length; i++ ) {
  let percent = completionArray[i] === 0 ? 'did not create any goals' : `completed ${Math.floor(completionArray[i].filter(x => x).length / completionArray[i].length * 100)}%`
  console.log('pc includes 100',percent.includes('100'))
  percent.includes('100') ? streaks.push(1) : streaks.push(0) %>
  <li class="form-element">On <%= weekdays[i] %> you <%= percent %>
    <button class="days" value="<%= i %>">Show daily goals</button>
    <div id="day<%= i %>" class="goals hide">
      <%= goalsByDay[i] %>
    </div>
  </li>

<% } %>
</ul>
<% streaks = streaks.reduce((res, n) =>
(n ? res[res.length-1]++ : res.push(0), res)
, [0]);
if ( streaks[0] !== 0 && streaks[0] > 1 ) { %>
<p>Current streak: <%= streaks[0] %> days of cheezy joy!</p>
<% let streakCount = streaks[0]
while (streakCount > 0) { %>
  <span> Cheeze.png </span>
<%  streakCount --
}
}%>
