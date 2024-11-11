Public Class Form1
    Private formUsuario As FormUsuario
    Private formAcerca As FormAcerca

    Private Sub ÁrbolGenialogicoToolStripMenuItem_Click(sender As Object, e As EventArgs) Handles ÁrbolGenialogicoToolStripMenuItem.Click
        Dim formArbol As New FormArbol()
        formArbol.MdiParent = Me
        formArbol.WindowState = FormWindowState.Maximized
        formArbol.Show()
    End Sub

    Private Sub UsuarioToolStripMenuItem_Click(sender As Object, e As EventArgs) Handles UsuarioToolStripMenuItem.Click
        If formUsuario Is Nothing OrElse formUsuario.IsDisposed Then
            formUsuario = New FormUsuario()
            formUsuario.MdiParent = Me
            formUsuario.WindowState = FormWindowState.Maximized
            formUsuario.Show()
        Else
            formUsuario.BringToFront()
        End If
    End Sub

    Private Sub AcercaDeToolStripMenuItem_Click(sender As Object, e As EventArgs) Handles AcercaDeToolStripMenuItem.Click
        If formAcerca Is Nothing OrElse formAcerca.IsDisposed Then
            formAcerca = New FormAcerca()
            formAcerca.MdiParent = Me
            formAcerca.WindowState = FormWindowState.Maximized
            formAcerca.Show()
        Else
            formAcerca.BringToFront()
        End If
    End Sub

    Private Sub CerrarToolStripMenuItem_Click(sender As Object, e As EventArgs) Handles CerrarToolStripMenuItem.Click
        If Me.ActiveMdiChild IsNot Nothing Then
            Me.ActiveMdiChild.Close()
        Else
            MessageBox.Show("No hay ningún formulario activo para cerrar.", "Información", MessageBoxButtons.OK, MessageBoxIcon.Information)
        End If
    End Sub

    Private Sub SalirToolStripMenuItem_Click(sender As Object, e As EventArgs) Handles SalirToolStripMenuItem.Click
        Me.Close()
    End Sub
End Class
