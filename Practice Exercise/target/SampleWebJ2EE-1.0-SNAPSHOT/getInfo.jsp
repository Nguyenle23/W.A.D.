<%-- 
    Document   : index
    Created on : Feb 13, 2022, 4:22:14 PM
    Author     : asus
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
          <head>
                    <title>Sample Web J2EE</title>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          </head>
          <body style="text-align: center">                  
                    <h1>Sample Form Declaration</h1>
                    </br>
                    <div>
                              <h2>Please Input The Value!</h2>
                              <form method="post" action="getResult.jsp">
                                        Full name: <input type="text" name="txt" required/>
                                        <br>
                                        <br>
                                        Student's ID: <input type="text" name="id" required/>
                                        <br>
                                        <br>
                                        Email: <input type="text" name="email" required/>
                                        <br>
                                        <br>
                                        Gender: <input type="radio" name="gender" value="Male"/>Male
                                        <input type="radio" name="gender" value="Female"/>Female
                                        <br>
                                        <br>
                                        Major: <select name="major">
                                                  <option>IT</option>
                                                  <option>BA</option>
                                                  <option>EE</option>
                                                  <option>BT</option>
                                        </select>
                                        <br>
                                        <br>
                                        Have you been in contact with anyone F0?  <input type="radio" name="contact" value="Yes"/> Yes
                                        <input type="radio" name="contact" value="No"/> No
                                        <br>
                                        <br>
                                        <input type="submit" value="Submit"/>
                              </form>
                    </div>
                    </br>
          </body>
</html>